import React from 'react';
import './SectionCompetences.css'

const SectionCompetences = () => {
    return (
        <div>
            <section className="sectionCompetences" id="ancre-competences">
                <div className="competencesDiv">
                    <button className="title-btn">
                        <span className="title-word">C<span className="faulty-letter">o</span>mpétences</span>
                    </button>
                    <div className="all-Cards">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="title">HTML / CSS</p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="title">Intégration web avec HTML - CSS</p>
                                    <p>+ responsive / animations</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="title">JavaScript</p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="title">Développement web avec JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="title">React</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>- Application React <br />- Interface reactive <br />- Router</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="title">Git/GitHub</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>- Versionner son projet avec Git et Github <br />- Prise d'informations d'autres Developpeurs</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="title">NodeJS <br /> Express <br /> MongoDB <br /> API REST</p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="title">Développement back-end </p>
                                    <p>- opérations CRUD <br />- Stocker des données de manière sécurisée <br />- Base de donnée <br />- Api </p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="title">Gestion de projet</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>- Méthodes Agile <br />- outil de gestion de projet <br />- Rédiger les spécifications techniques d'un projet <br />- Présenter la solution technique <br />- Veille technologique</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p className="title">Optimisation et debug (SEO)</p>
                                </div>
                                <div className="flip-card-back">
                                    <p>- Optimiser les performances <br />- Débug avec Chrome DevTools <br />- Cahier de recette</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionCompetences;