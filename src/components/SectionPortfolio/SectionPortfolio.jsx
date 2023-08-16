import React from 'react';
import './SectionPortfolio.css'
import Projet from '../Project/Projet';
import JsonData from '../../datas/data.json'

const SectionPortfolio = () => {
    console.log(JsonData)
    return (
        <div>
            <section className="sectionPortfolio" id='ancre-portfolio'>
                <div className="portfolioDiv">
                    <button className="title-btn">
                        <span className="title-word">P<span className="faulty-letter">o</span>rtfolio</span>
                    </button>
                    <div className="corner-top">
                        <div className="corner-up-left"></div>
                        <div className="corner-up-right"></div>
                    </div>
                    <div className='allCards'>
                        {
                            JsonData.map((projet, index)  => {
                            return <Projet 
                                key={index} 
                                date={projet.date} 
                                epreuves={projet.epreuves}
                                imagePrincipale={projet.imagePrincipale}
                                imagesSecondaires={projet.imagesSecondaires}
                                mission={projet.mission}
                                outils={projet.outils}
                                titre={projet.titre}
                                id={projet.id}
                            />
                            })
                        }
                    </div>
                    <div className="corner-bottom corner-bottom-portfolio">
                        <div className="corner-bottom-left"></div>
                        <div className="corner-bottom-right"></div>
                    </div>
                </div>
                <div id='ancre-contact'></div>
            </section >
        </div>
    );
};

export default SectionPortfolio;