import React from 'react';
import { Event } from '../types';

interface EventModalProps {
    event: Event | null;
    onClose: () => void;
    onSave: (event: Event) => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose, onSave }) => {
    const [title, setTitle] = React.useState(event ? event.title : '');
    const [description, setDescription] = React.useState(event ? event.description : '');
    const [date, setDate] = React.useState(event ? event.date : '');
    const [time, setTime] = React.useState(event ? event.time : '');
    const [recurrence, setRecurrence] = React.useState(event ? event.recurrence : 'none');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedEvent = {
            ...event,
            title,
            description,
            date,
            time,
            recurrence,
        };
        onSave(updatedEvent);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{event ? 'Edit Event' : 'Add Event'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </label>
                    <label>
                        Description:
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Date:
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </label>
                    <label>
                        Time:
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                    </label>
                    <label>
                        Recurrence:
                        <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)}>
                            <option value="none">None</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="custom">Custom</option>
                        </select>
                    </label>
                    <button type="submit">{event ? 'Update Event' : 'Add Event'}</button>
                </form>
            </div>
        </div>
    );
};

export default EventModal;