export interface Event {
    id: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    recurrence?: Recurrence;
    color?: string;
}

export interface Recurrence {
    type: 'daily' | 'weekly' | 'monthly' | 'custom';
    interval?: number;
    daysOfWeek?: number[]; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    dayOfMonth?: number; // For monthly recurrence
    customPattern?: string; // For custom recurrence patterns
}