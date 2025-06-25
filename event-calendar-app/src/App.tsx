import React from 'react';
import { EventProvider } from './hooks/useEvents';
import Calendar from './components/Calendar';
import FilterBar from './components/FilterBar';
import './styles/calendar.css';

const App: React.FC = () => {
    return (
        <EventProvider>
            <div className="app">
                <h1>Event Calendar</h1>
                <FilterBar />
                <Calendar />
            </div>
        </EventProvider>
    );
};

export default App;