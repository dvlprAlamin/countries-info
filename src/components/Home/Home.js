import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1 className="title">List of all countries</h1>
            <div className="countries">
                {
                    countries?.map(country => 
                    <Link key={country.alpha2Code} to={`/country/${country.name}`} className="country">
                        <div className="single-country">
                            <div className="front">
                            <img src={country.flag} alt=""/>
                            <h1>Name: {country.name}</h1>
                            <h3>Capital: {country.capital}</h3>
                            </div>
                            <div className="back">
                            <img src={country.flag} alt=""/>
                            <h1>Name: {country.name}</h1>
                            <h3>Capital: {country.capital}</h3>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Home;