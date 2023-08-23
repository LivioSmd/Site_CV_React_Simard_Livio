import React from 'react';
import LogoCv from './LogoCv.png';
import './Header.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
    return (
            <header>
                <div className="head-infos">
                    <img className="LogoCv" src={LogoCv} alt="Logo du Curriculum vitae" /> 
                    <nav className="head-category">
                        <div className="light-button">
                            <button className="bt" id="btn-nav-presentation">
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder">
                                    <p>Présentation</p>
                                </div>
                            </button>
                        </div>
                        <div className="light-button">
                            <button className="bt" id="btn-nav-competences">
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder">
                                    <p>Compétences</p>
                                </div>
                            </button>
                        </div>
                        <div className="light-button">
                            <button className="bt" id="btn-nav-portfolio">
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder">
                                    <p>Portfolio</p>
                                </div>
                            </button>
                        </div>
                        <div className="light-button">
                            <button className="bt" id="btn-nav-contact">
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder">
                                    <p>Contact</p>
                                </div>
                            </button>
                        </div>
                    </nav>
                    <div className='burger'>
                        <BurgerMenu />
                    </div>
                </div>
                <div id="ancre-presentation"></div>
            </header>
    );
};

export default Header;