import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SectionCompetences from '../components/SectionCompetences/SectionCompetences'
import SectionContact from '../components/SectionContact/SectionContact'
import SectionPortfolio from '../components/SectionPortfolio/SectionPortfolio'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        // bouton redirection Compétences nav et burger
        const boutonCompetences = document.getElementById('btn-nav-competences');
        const ancreCompetences = document.getElementById('ancre-competences');

        const boutonCompetencesBurger = document.getElementById('btn-nav-competences-burger');
        const ancreCompetencesBurger = document.getElementById('ancre-competences');

        // bouton redirection Presentation nav et burger
        const boutonPresentation = document.getElementById('btn-nav-presentation');
        const ancrePresentation = document.getElementById('ancre-presentation');

        const boutonPresentationBurger = document.getElementById('btn-nav-presentation-burger');
        const ancrePresentationBurger = document.getElementById('ancre-presentation');

        // bouton redirection Portfolio nav et burger
        const boutonPortfolio = document.getElementById('btn-nav-portfolio-burger');
        const ancrePortfolio = document.getElementById('ancre-portfolio');

        const boutonPortfolioBurger = document.getElementById('btn-nav-portfolio');
        const ancrePortfolioBurger = document.getElementById('ancre-portfolio');

        // bouton redirection Contact nav et burger
        const boutonContact = document.getElementById('btn-nav-contact');
        const ancreContact = document.getElementById('ancre-contact');

        const boutonContactBurger = document.getElementById('btn-nav-contact-burger');
        const ancreContactBurger = document.getElementById('ancre-contact');


        boutonCompetences.addEventListener('click', () => {
            ancreCompetences.scrollIntoView({ behavior: 'smooth' });
        });

        boutonCompetencesBurger.addEventListener('click', () => {
            ancreCompetencesBurger.scrollIntoView({ behavior: 'smooth' });
        });

    
        boutonPresentation.addEventListener('click', () => {
            ancrePresentation.scrollIntoView({ behavior: 'smooth' });
        });

        boutonPresentationBurger.addEventListener('click', () => {
            ancrePresentationBurger.scrollIntoView({ behavior: 'smooth' });
        });


        boutonPortfolio.addEventListener('click', () => {
            ancrePortfolio.scrollIntoView({ behavior: 'smooth' });
        });

        boutonPortfolioBurger.addEventListener('click', () => {
            ancrePortfolioBurger.scrollIntoView({ behavior: 'smooth' });
        });


        boutonContact.addEventListener('click', () => {
            ancreContact.scrollIntoView({ behavior: 'smooth' });
        });

        boutonContactBurger.addEventListener('click', () => {
            ancreContactBurger.scrollIntoView({ behavior: 'smooth' });
        });
    });

    return (
        <div>
            <Header />
            <SectionTitle />
            <SectionCompetences />
            <SectionPortfolio />
            <SectionContact />
            <Footer />
        </div>
    );
};

export default Page;