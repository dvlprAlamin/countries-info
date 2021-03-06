import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Countries = () => {
    const {info,value} = useParams();
    console.log(info, value);
    const [countries, setCountries] = useState([])
    useEffect(()=> {
        let url = `https://restcountries.eu/rest/v2/${info}/${value}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1 className="title">List of all countries in {value} {info}</h1>
            <div className="countries">
                {
                    // countries?.map(country => 
                    // <Link to={`/country/${country.name}`} className="country">
                    //     <img src={country.flag} alt=""/>
                    //     <h1>Name: {country.name}</h1>
                    //     <h3>Capital: {country.capital}</h3>
                    // </Link>)
                }
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

export default Countries;