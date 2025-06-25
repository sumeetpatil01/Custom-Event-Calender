import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Event } from '../types';

interface DragAndDropWrapperProps {
    events: Event[];
    onEventDrop: (event: Event, newDate: Date) => void;
    children: React.ReactNode;
}

const DragAndDropWrapper: React.FC<DragAndDropWrapperProps> = ({ events, onEventDrop, children }) => {
    const [draggedEvent, setDraggedEvent] = useState<Event | null>(null);

    const [{ isOver }, drop] = useDrop({
        accept: 'EVENT',
        drop: (item: { event: Event }) => {
            if (draggedEvent) {
                onEventDrop(draggedEvent, item.event.date);
                setDraggedEvent(null);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const handleDragStart = (event: Event) => {
        setDraggedEvent(event);
    };

    return (
        <div ref={drop} className={`drop-area ${isOver ? 'highlight' : ''}`}>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    onDragStart: handleDragStart,
                });
            })}
        </div>
    );
};

export default DragAndDropWrapper;