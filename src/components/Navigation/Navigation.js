import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    return (
        <div className="menu">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/regions">Countries By Region</Link>
                <Link to="/regionalblocs">Countries By Regional Bloc</Link>
            </nav>
        </div>
    );
};

export default Navigation;