import React, { useState, useEffect } from 'react';
import { getDaysInMonth, format, isToday, startOfMonth, addMonths, subMonths } from 'date-fns';
import { Event } from '../types';
import EventList from './EventList';
import './calendar.css';

const Calendar: React.FC<{ events: Event[] }> = ({ events }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const daysInMonth = getDaysInMonth(currentMonth);
    const startDate = startOfMonth(currentMonth);
    
    const handlePrevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    };

    return (
        <div className="calendar">
            <header>
                <button onClick={handlePrevMonth}>Previous</button>
                <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
                <button onClick={handleNextMonth}>Next</button>
            </header>
            <div className="days">
                {Array.from({ length: daysInMonth }, (_, index) => {
                    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index + 1);
                    return (
                        <div
                            key={index}
                            className={`day ${isToday(date) ? 'today' : ''}`}
                            onClick={() => handleDateClick(date)}
                        >
                            {index + 1}
                        </div>
                    );
                })}
            </div>
            {selectedDate && <EventList date={selectedDate} events={events} />}
        </div>
    );
};

export default Calendar;