import { useState, useEffect } from 'react';
import { Event, Recurrence } from '../types';

const useEvents = () => {
    const [events, setEvents] = useState<Event[]>(() => {
        const savedEvents = localStorage.getItem('events');
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    const addEvent = (event: Event) => {
        setEvents((prevEvents) => [...prevEvents, event]);
    };

    const editEvent = (updatedEvent: Event) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
        );
    };

    const deleteEvent = (eventId: string) => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
    };

    const getEventsByDate = (date: Date) => {
        return events.filter((event) => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === date.toDateString();
        });
    };

    const handleRecurringEvents = (recurrence: Recurrence) => {
        // Logic to handle recurring events based on the recurrence pattern
    };

    return {
        events,
        addEvent,
        editEvent,
        deleteEvent,
        getEventsByDate,
        handleRecurringEvents,
    };
};

export default useEvents;