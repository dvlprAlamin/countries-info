import React from 'react';
import { Link } from 'react-router-dom';

const RegionalBloc = () => {
    const regionalBloc = [
                    {name:'European Union', flag:'https://i.ibb.co/KrLtqHS/eu.png' , shortForm:'eu'},
                    {name:'European Free Trade Association', flag:'https://i.ibb.co/Fx4578M/efta.png' , shortForm:'efta'},
                    {name:'Caribbean Community', flag:'https://i.ibb.co/0y2FPmm/caricom.png' , shortForm:'caricom'},
                    {name:'Pacific Alliance', flag:'https://i.ibb.co/GQhHy4b/pa.png' , shortForm:'pa'},
                    {name:'African Union', flag:'https://i.ibb.co/NKH6czc/au.png' , shortForm:'au'},
                    {name:'Union of South American Nations', flag:'https://i.ibb.co/3F22ZmG/usan.png' , shortForm:'usan'},
                    {name:'Eurasian Economic Union', flag:'https://i.ibb.co/smq3NQr/eeu.png' , shortForm:'eeu'},
                    {name:'Arab League', flag:'https://i.ibb.co/0MfFRdJ/al.png' , shortForm:'al'},
                    {name:'Association of Southeast Asian Nations', flag:'https://i.ibb.co/q1kfk90/asean.png' , shortForm:'asean'},
                    {name:'Central American Integration System', flag:'https://i.ibb.co/Phwwdtd/cais.jpg' , shortForm:'cais'},
                    {name:'Central European Free Trade Agreement', flag:'https://i.ibb.co/LpB9djT/cefta.png' , shortForm:'cefta'},
                    {name:'North American Free Trade Agreement', flag:'https://i.ibb.co/WkPkqrr/nafta.png' , shortForm:'nafta'},
                    {name:'South Asian Association for Regional Cooperation', flag:'https://i.ibb.co/z8pBgsr/saarc.jpg' , shortForm:'saarc'},
                ]
    return (
        <div className="list-container">
            {
                regionalBloc.map((rgbc, idx) => 
                <Link to={`regionalbloc/${rgbc.shortForm}/countries`} key={idx} className="single-item">
                    <img src={rgbc.flag} alt=""/>
                    <h1>{rgbc.name} ({rgbc.shortForm})</h1>
                </Link>)
            }
        </div>
    );
};

export default RegionalBloc;