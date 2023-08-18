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
        // Utilisez useEffect pour gérer les effets secondaires (comme les écouteurs d'événements)
        const boutonCompetences = document.getElementById('btn-nav-competences');
        const ancreCompetences = document.getElementById('ancre-competences');

        const boutonPresentation = document.getElementById('btn-nav-presentation');
        const ancrePresentation = document.getElementById('ancre-presentation');

        const boutonPortfolio = document.getElementById('btn-nav-portfolio');
        const ancrePortfolio = document.getElementById('ancre-portfolio');

        const boutonContact = document.getElementById('btn-nav-contact');
        const ancreContact = document.getElementById('ancre-contact');

        boutonCompetences.addEventListener('click', () => {
            ancreCompetences.scrollIntoView({ behavior: 'smooth' });
        });

        boutonPresentation.addEventListener('click', () => {
            ancrePresentation.scrollIntoView({ behavior: 'smooth' });
        });

        boutonPortfolio.addEventListener('click', () => {
            ancrePortfolio.scrollIntoView({ behavior: 'smooth' });
        });

        boutonContact.addEventListener('click', () => {
            ancreContact.scrollIntoView({ behavior: 'smooth' });
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