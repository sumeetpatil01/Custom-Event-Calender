import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onFilterChange(e.target.value, category);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        onFilterChange(searchTerm, e.target.value);
    };

    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <select value={category} onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="holiday">Holiday</option>
                {/* Add more categories as needed */}
            </select>
        </div>
    );
};

export default FilterBar;