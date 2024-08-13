import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>News Aggregator</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;