import React, {useEffect, useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import PlanetInfo from './components/PlanetInfo/PlanetInfo';
import data from './data.json';

function App() {

  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState();

  useEffect(() => {
    setPlanets(data);
  });

  const fetchPlanetInfo = (planet) => {
    let item = planets.filter(function(el) {
      return el.name === planet;
    });
    console.log(item);
    setSelectedPlanet(item);
  };

  return (
    <div className="App">
      <Navbar getPlanet={fetchPlanetInfo} />
      <PlanetInfo selectedPlanet={selectedPlanet} />
    </div>
  );
}

export default App;
