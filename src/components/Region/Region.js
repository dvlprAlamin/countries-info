import React from 'react';
import { Link } from 'react-router-dom';
import './Region.css'
const Region = () => {
    const regions = ['Africa','Americas','Asia','Europe','Oceania'];
    return (
        <div className="list-container">
            {
                regions.map((region, idx) => 
                <Link to={`/region/${region}/countries`} key={idx} className="single-item">
                    <h1>{region}</h1>
                </Link>)
            }
        </div>
    );
};

export default Region;