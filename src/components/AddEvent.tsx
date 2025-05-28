
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
          Add Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-blue-800">Add New Family Event</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Soccer practice, Family dinner..."
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Additional details..."
              rows={3}
            />
          </div>
          
          <div>
            <Label>Date</Label>
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
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
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
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label>Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="work">Work</SelectItem>
                <SelectItem value="school">School</SelectItem>
                <SelectItem value="family">Family Time</SelectItem>
                <SelectItem value="sports">Sports/Activities</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>Family Member</Label>
            <Select value={familyMember} onValueChange={setFamilyMember} required>
              <SelectTrigger>
                <SelectValue placeholder="Select family member" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mom">Mom</SelectItem>
                <SelectItem value="dad">Dad</SelectItem>
                <SelectItem value="child1">Child 1</SelectItem>
                <SelectItem value="child2">Child 2</SelectItem>
                <SelectItem value="family">Whole Family</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Add Event
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEvent;
