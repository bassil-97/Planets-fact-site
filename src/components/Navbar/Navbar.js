import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

import NavItem from './NavItem/NavItem';
import data from '../../data.json';

export default function Navbar({ getPlanet }) {

    let planets = data && data.map((planet) => {
        return (
            <NavItem key={planet.name} planet={planet} getPlanet={getPlanet} />
        );
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to='/Earth' className="navbar-brand" onClick={() => getPlanet('Earth')}>the planets</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {planets}
                </ul>
            </div>
        </nav>
    );
}
