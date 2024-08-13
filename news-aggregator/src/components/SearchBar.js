import React from 'react';

const Searchbar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search articles..." />
            <button type="button">Search</button>
        </div>
    );
};

export default Searchbar;