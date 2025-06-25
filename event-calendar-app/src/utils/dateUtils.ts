import { format, isSameDay, isBefore, isAfter, addDays } from 'date-fns';

// Format a date to a readable string
export const formatDate = (date: Date): string => {
    return format(date, 'MMMM d, yyyy');
};

// Check if two dates are the same day
export const isSameDate = (date1: Date, date2: Date): boolean => {
    return isSameDay(date1, date2);
};

// Check if a date is in the past
export const isPastDate = (date: Date): boolean => {
    return isBefore(date, new Date());
};

// Check if a date is in the future
export const isFutureDate = (date: Date): boolean => {
    return isAfter(date, new Date());
};

// Get an array of dates for a given month and year
export const getDatesInMonth = (month: number, year: number): Date[] => {
    const dates: Date[] = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        dates.push(new Date(year, month, day));
    }
    return dates;
};

// Add days to a date
export const addDaysToDate = (date: Date, days: number): Date => {
    return addDays(date, days);
};