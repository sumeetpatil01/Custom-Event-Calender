export type RecurrenceType = 'none' | 'daily' | 'weekly' | 'monthly' | 'custom';

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string; // ISO string
  time?: string; // "HH:mm"
  color?: string;
  recurrence?: {
    type: RecurrenceType;
    interval?: number; // for custom
    daysOfWeek?: number[]; // for weekly
    dayOfMonth?: number; // for monthly
  };
}