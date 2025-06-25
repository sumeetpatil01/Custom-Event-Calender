import { Recurrence } from '../types';

export const calculateRecurrences = (eventDate: Date, recurrence: Recurrence, occurrences: number): Date[] => {
    const dates: Date[] = [];
    let currentDate = new Date(eventDate);

    for (let i = 0; i < occurrences; i++) {
        dates.push(new Date(currentDate));

        switch (recurrence.type) {
            case 'daily':
                currentDate.setDate(currentDate.getDate() + 1);
                break;
            case 'weekly':
                currentDate.setDate(currentDate.getDate() + 7);
                break;
            case 'monthly':
                currentDate.setMonth(currentDate.getMonth() + 1);
                break;
            case 'custom':
                currentDate.setDate(currentDate.getDate() + recurrence.interval);
                break;
            default:
                break;
        }
    }

    return dates;
};

export const isEventRecurring = (eventDate: Date, recurrence: Recurrence): boolean => {
    const today = new Date();
    return today <= eventDate && recurrence.type !== 'none';
};

export const getNextOccurrence = (eventDate: Date, recurrence: Recurrence): Date => {
    const nextDate = new Date(eventDate);

    switch (recurrence.type) {
        case 'daily':
            nextDate.setDate(nextDate.getDate() + 1);
            break;
        case 'weekly':
            nextDate.setDate(nextDate.getDate() + 7);
            break;
        case 'monthly':
            nextDate.setMonth(nextDate.getMonth() + 1);
            break;
        case 'custom':
            nextDate.setDate(nextDate.getDate() + recurrence.interval);
            break;
        default:
            break;
    }

    return nextDate;
};