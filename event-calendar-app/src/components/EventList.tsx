import React from 'react';
import { Event } from '../types';
import './EventList.css';

interface EventListProps {
    events: Event[];
    onEdit: (event: Event) => void;
    onDelete: (eventId: string) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onEdit, onDelete }) => {
    return (
        <div className="event-list">
            {events.length === 0 ? (
                <p>No events for this day.</p>
            ) : (
                events.map(event => (
                    <div key={event.id} className="event-item">
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <p>{new Date(event.date).toLocaleString()}</p>
                        <div className="event-actions">
                            <button onClick={() => onEdit(event)}>Edit</button>
                            <button onClick={() => onDelete(event.id)}>Delete</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default EventList;