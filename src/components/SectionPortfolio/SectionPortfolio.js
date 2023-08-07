import React from 'react';
import './SectionPortfolio.css'


const SectionPortfolio = () => {
    return (
        <div>
            <section className="sectionPortfolio" id="ancre-portfolio">
                <div className="portfolioDiv">
                    <button className="title-btn">
                        <span className="title-word">P<span className="faulty-letter">o</span>rtfolio</span>
                    </button>
                    <div className="corner-top">
                        <div className="corner-up-left"></div>
                        <div className="corner-up-right"></div>
                    </div>
                    <div className="all-cards-portfolio">
                        <div className="projects-container" id="projectsContainer"></div>
                        <div className="modal" id="modal">
                            <span className="close" id="closeModal">&times;</span>
                            <div className="modal-content" id="modalContent"></div>
                        </div>
                    </div>
                    <div className="corner-bottom corner-bottom-portfolio">
                        <div className="corner-bottom-left"></div>
                        <div className="corner-bottom-right"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionPortfolio;