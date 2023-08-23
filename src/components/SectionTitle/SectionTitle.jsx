import React from 'react';
import './SectionTitle.css'

const SectionTitle = () => {
    return (
            <section className="sectionTitle">
                <div className="corner-top">
                    <div className="corner-up-left"></div>
                    <div className="corner-up-right"></div>
                </div>
                <div className="title1">
                    <h1>
                        Curriculum vitae <br /> Simard Livio
                    </h1>
                    <div className="card-desc">
                        <p className="small-desc">Bonjour, Je suis Livio Simard, développeur web passionné, fort d'une année remplie d'expérience professionnelle. Autonome, passionné et avide d'apprentissage, j'ai collaboré sur divers projets, certains sont présentés ci-dessous. Mon objectif est de rester connecté à la pointe des nouvelles technologies dans ce domaine fascinant et en perpétuelle évolution. Ce site et mon CV révèlent mes compétences et mon engagement à créer des solutions web innovantes.</p>
                        <div className="go-corner">
                            <div className="go-arrow">→</div>
                        </div>
                    </div>
            </div>
                <div className="corner-bottom">
                    <div className="corner-bottom-left"></div>
                    <div className="corner-bottom-right"></div>
                </div>
            </section>
    );
};

export default SectionTitle;