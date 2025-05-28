import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AddEvent from '@/components/AddEvent';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format, isSameDay } from 'date-fns';
import { Clock, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  category: string;
  familyMember: string;
}

const Calendar = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { t } = useLanguage();

  // Load events from localStorage on component mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('nestfam-events');
    if (savedEvents) {
      const parsed = JSON.parse(savedEvents);
      const eventsWithDates = parsed.map((event: any) => ({
        ...event,
        date: new Date(event.date)
      }));
      setEvents(eventsWithDates);
    }
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('nestfam-events', JSON.stringify(events));
  }, [events]);

  const handleAddEvent = (event: Event) => {
    setEvents(prev => [...prev, event]);
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date));
  };

  const selectedDateEvents = getEventsForDate(selectedDate);

  const getCategoryColor = (category: string) => {
    const colors = {
      work: 'bg-blue-100 text-blue-800',
      school: 'bg-green-100 text-green-800',
      family: 'bg-purple-100 text-purple-800',
      sports: 'bg-orange-100 text-orange-800',
      medical: 'bg-red-100 text-red-800',
      social: 'bg-pink-100 text-pink-800',
      other: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || colors.other;
  };

  const getFamilyMemberColor = (member: string) => {
    const colors = {
      mom: 'bg-rose-100 text-rose-800',
      dad: 'bg-blue-100 text-blue-800',
      child1: 'bg-yellow-100 text-yellow-800',
      child2: 'bg-cyan-100 text-cyan-800',
      family: 'bg-purple-100 text-purple-800'
    };
    return colors[member as keyof typeof colors] || colors.family;
  };

  // Custom day content to show dots for days with events
  const customDayContent = (day: Date) => {
    const dayEvents = getEventsForDate(day);
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <span>{day.getDate()}</span>
        {dayEvents.length > 0 && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-800 mb-2">{t('familyCalendar')}</h1>
            <p className="text-gray-600">{t('calendarDescription')}</p>
          </div>
          <AddEvent onAddEvent={handleAddEvent} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-blue-800">
                  {format(selectedDate, 'MMMM yyyy')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="w-full p-3 pointer-events-auto"
                  components={{
                    DayContent: ({ date }) => customDayContent(date)
                  }}
                />
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-blue-800">
                  {t('eventsFor')} {format(selectedDate, 'MMMM d, yyyy')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDateEvents.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    {t('noEventsScheduled')}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {selectedDateEvents
                      .sort((a, b) => a.time.localeCompare(b.time))
                      .map(event => (
                        <div
                          key={event.id}
                          className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">{event.title}</h3>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Clock className="h-4 w-4 mr-1" />
                              {event.time}
                            </div>
                          </div>
                          
                          {event.description && (
                            <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                          )}
                          
                          <div className="flex flex-wrap gap-2">
                            <Badge className={getCategoryColor(event.category)}>
                              {t(event.category)}
                            </Badge>
                            <Badge className={getFamilyMemberColor(event.familyMember)}>
                              <User className="h-3 w-3 mr-1" />
                              {t(event.familyMember)}
                            </Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
