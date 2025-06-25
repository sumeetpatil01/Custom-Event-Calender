import React, { useState, useEffect } from 'react';
import { Event } from '../types';
import { recurrenceOptions } from '../utils/recurrenceUtils';

interface EventFormProps {
    event?: Event;
    onSubmit: (event: Event) => void;
    onCancel: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ event, onSubmit, onCancel }) => {
    const [title, setTitle] = useState(event ? event.title : '');
    const [date, setDate] = useState(event ? event.date : '');
    const [time, setTime] = useState(event ? event.time : '');
    const [description, setDescription] = useState(event ? event.description : '');
    const [recurrence, setRecurrence] = useState(event ? event.recurrence : recurrenceOptions[0]);

    useEffect(() => {
        if (event) {
            setTitle(event.title);
            setDate(event.date);
            setTime(event.time);
            setDescription(event.description);
            setRecurrence(event.recurrence);
        }
    }, [event]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            title,
            date,
            time,
            description,
            recurrence,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Event Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Time:</label>
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Recurrence:</label>
                <select
                    value={recurrence}
                    onChange={(e) => setRecurrence(e.target.value)}
                >
                    {recurrenceOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Save Event</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EventForm;