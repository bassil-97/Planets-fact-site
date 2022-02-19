import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem({ planet, getPlanet }) {
  return (
    <li className="nav-item active">
        <Link to={`/${planet.name}`} className="nav-link" onClick={() => getPlanet(planet.name)}>{planet.name} <span className="sr-only">(current)</span></Link>
    </li>
  )
}
