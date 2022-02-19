import React, { useState, useEffect } from 'react';

import './Tabs.css';
import './PlanetInfo.css';

export default function PlanetInfo({ selectedPlanet }) {

    const [selectedMenu, setSelectedMenu] = useState('');

    useEffect(() => {
        setSelectedMenu('planet');
    }, []);

    const assignImg = (selectedMenu) => {
        setSelectedMenu(selectedMenu);
    };

    return (
        <div className='planet__info'>
            {selectedPlanet && selectedPlanet.map((planet) => {
                return(
                    <>
                    <div className='row' key={planet.name}>
                        <div className='col-lg-6'>
                            {selectedMenu === 'planet' ? <img 
                                className='img-responsive planet-img' 
                                src={planet.images.planet} 
                                alt="planet-img"
                                data-aos="fade-up-right"
                                data-aos-duration="1000"
                            /> : null }

                            {selectedMenu === 'internal' ? <img 
                                className='img-responsive planet-img' 
                                src={planet.images.internal} 
                                alt="planet-img"
                                data-aos="fade-up-right"
                                data-aos-duration="1000"
                            /> : null }

                            {selectedMenu === 'geology' ? <div className='geology__container'>
                                <img 
                                    className='img-responsive planet-img' 
                                    src={planet.images.planet} 
                                    alt="planet-img"
                                    data-aos="fade-up-right"
                                    data-aos-duration="1000"
                                />
                                <img 
                                    className='img-responsive planet-img-geology' 
                                    src={planet.images.geology} 
                                    alt="planet-img"
                                    data-aos="zoom-in"
                                />
                            </div> : null }
                        </div>
                        <div className='col-lg-6'>
                            <h1 className='planet__name' data-aos="fade-left" data-aos-duration="1000">{planet.name}</h1>
                            <div className='tab-content'>
                                <div id="overview" className="tab-pane active">
                                    <p className='planet__content' data-aos="fade-left" data-aos-duration="2000">{planet.overview.content}</p>
                                    <div className='source'>
                                        <span>Source: </span>
                                        <a className='source__link' href={planet.overview.source}>
                                            Wikipedia
                                        </a>
                                    </div>
                                </div>
                                <div id="internal-structure" className="tab-pane fade">
                                    <p className='planet__content' data-aos="fade-left" data-aos-duration="2000">{planet.structure.content}</p>
                                    <div className='source'>
                                        <span>Source: </span>
                                        <a className='source__link' href={planet.structure.source}>
                                            Wikipedia
                                        </a>
                                    </div>
                                </div>
                                <div id="surface-geology" className="tab-pane fade">
                                    <p className='planet__content' data-aos="fade-left" data-aos-duration="2000">{planet.geology.content}</p>
                                    <div className='source'>
                                        <span>Source: </span>
                                        <a className='source__link' href={planet.geology.source}>
                                            Wikipedia
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs">
                                <li className="active" onClick={() => assignImg('planet')}><a data-toggle="tab" href="#overview">overview</a></li>
                                <li onClick={() => assignImg('internal')}><a data-toggle="tab" href="#internal-structure">internal structure</a></li>
                                <li onClick={() => assignImg('geology')}><a data-toggle="tab" href="#surface-geology">surface geology</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='general__info'>
                        <div className='item'>
                            <h4>rotation time</h4>
                            <p>{planet.rotation}</p>
                        </div>
                        <div className='item'>
                            <h4>REVOLUTION TIME</h4>
                            <p>{planet.revolution}</p>
                        </div>
                        <div className='item'>
                            <h4>radius</h4>
                            <p>{planet.radius}</p>
                        </div>
                        <div className='item'>
                            <h4>average temp.</h4>
                            <p>{planet.temperature}</p>
                        </div>
                    </div>
                    <div/>
                    </>
                );
            })}
        </div>
    )
}
