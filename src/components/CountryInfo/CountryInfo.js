import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryInfo = () => {
    const {name} = useParams()
    const [country, setCountry] = useState({});
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[])
    return (
        <div>
            <table className="country-info">
                <tbody>
                    <tr>
                        <td colSpan="2"><div className="img"><img src={country.flag} alt=""/></div></td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{country.name}</td>
                    </tr>
                    <tr>
                        <th>Native Name</th>
                        <td>{country.nativeName}</td>
                    </tr>
                    <tr>
                        <th>Alpha 2 Code</th>
                        <td>{country.alpha2Code}</td>
                    </tr>
                    <tr>
                        <th>Alpha 3 Code</th>
                        <td>{country.alpha3Code}</td>
                    </tr>
                    <tr>
                        <th>Capital</th>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <th>Area</th>
                        <td>{country.area} Square KM</td>
                    </tr>
                    <tr>
                        <th>Population</th>
                        <td>{country.population}</td>
                    </tr>
                    <tr>
                        <th>Region</th>
                        <td>{country.region}</td>
                    </tr>
                    <tr>
                        <th>Subregion</th>
                        <td>{country.subregion}</td>
                    </tr>
                    <tr>
                        <th>Borders</th>
                        <td>
                            {
                                country.borders?.map((border, idx) => <span style={{marginRight:'10px'}} to={border} key={idx}>{border} </span>)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th>Currency</th>
                        <td>{country.currencies && country.currencies[0].name} ( {country.currencies && country.currencies[0].symbol} )</td>
                    </tr>
                    <tr>
                        <th>Languages</th>
                        <td>
                            {
                                country.languages?.map((language, idx) => <span style={{marginRight:'10px'}}  key={idx}>{language.name} ( {language.nativeName} ) </span>)
                            }
                        </td>
                    </tr>                    
                    <tr>
                        <th>Regional Blocs</th>
                        <td>{country.regionalBlocs?.length > 0 ? country.regionalBlocs[0].name : ''} ( {country.regionalBlocs?.length > 0  ? country.regionalBlocs[0].acronym : 'None'} )</td>
                    </tr>
                    <tr>
                        <th>Numeric Code</th>
                        <td>{country.numericCode}</td>
                    </tr>
                    <tr>
                        <th>Timezone</th>
                        <td>{country.timezones}</td>
                    </tr>
                    <tr>
                        <th>Calling Code</th>
                        <td>+{country.callingCodes && country.callingCodes[0]}</td>
                    </tr>
                    <tr>
                        <th>Top Level Domain</th>
                        <td>{country.topLevelDomain}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CountryInfo;