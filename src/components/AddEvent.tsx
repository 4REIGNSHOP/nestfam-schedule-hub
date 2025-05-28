
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
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

interface AddEventProps {
  onAddEvent: (event: Event) => void;
}

const AddEvent = ({ onAddEvent }: AddEventProps) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [familyMember, setFamilyMember] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !date || !time || !category || !familyMember) return;
    
    const newEvent: Event = {
      id: Date.now().toString(),
      title,
      description,
      date,
      time,
      category,
      familyMember
    };
    
    onAddEvent(newEvent);
    
    // Reset form
    setTitle('');
    setDescription('');
    setDate(undefined);
    setTime('');
    setCategory('');
    setFamilyMember('');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          {t('addEvent')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-blue-800">{t('addNewFamilyEvent')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">{t('eventTitle')}</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t('eventTitlePlaceholder')}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description">{t('description')}</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t('descriptionPlaceholder')}
              rows={3}
            />
          </div>
          
          <div>
            <Label>{t('date')}</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>{t('pickDate')}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label htmlFor="time">{t('time')}</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label>{t('category')}</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder={t('selectCategory')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="work">{t('work')}</SelectItem>
                <SelectItem value="school">{t('school')}</SelectItem>
                <SelectItem value="family">{t('family')}</SelectItem>
                <SelectItem value="sports">{t('sports')}</SelectItem>
                <SelectItem value="medical">{t('medical')}</SelectItem>
                <SelectItem value="social">{t('social')}</SelectItem>
                <SelectItem value="other">{t('other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>{t('familyMember')}</Label>
            <Select value={familyMember} onValueChange={setFamilyMember} required>
              <SelectTrigger>
                <SelectValue placeholder={t('selectFamilyMember')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mom">{t('mom')}</SelectItem>
                <SelectItem value="dad">{t('dad')}</SelectItem>
                <SelectItem value="child1">{t('child1')}</SelectItem>
                <SelectItem value="child2">{t('child2')}</SelectItem>
                <SelectItem value="family">{t('wholeFamily')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            {t('addEvent')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEvent;
