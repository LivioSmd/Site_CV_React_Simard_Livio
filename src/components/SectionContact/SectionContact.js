import React from 'react';
import './SectionContact.css'

const SectionContact = () => {
    return (
        <div>
            <section className="sectionContact" id="ancre-contact">
                <button className="title-btn">
                    <span className="title-word">C<span className="faulty-letter">o</span>ntact</span>
                </button>
                <div className="contact-div">
                    <div className="title-img-contact">
                        <h3>N'hésitez pas à me contacter en utilisant ce formulaire pour que nous puissions commencer à collaborer ensemble.</h3>
                    </div>
                    <div className="form-container">
                        <form className="form" id="form">
                            <p id="heading">Fiche Contact</p>
                            <div className="div-nom-prenom">
                                <div className="field field-ligne">
                                    <label htmlFor="nom"></label>
                                    <input autoComplete="off" placeholder="Nom" id="nom" className="input-field" type="text" />
                            </div>
                            <div className="field field-ligne">
                                    <label htmlFor="prenom"></label>
                                    <input placeholder="Prénom" id="prenom" className="input-field" type="text" />
                            </div>
                            </div>
                                <div className="field">
                                <label htmlFor="email"></label>
                                <input placeholder="Email" id="email" className="input-field" type="text" />
                            </div>
                                <div className="field">
                                <label htmlFor="sujet"></label>
                                <input placeholder="Sujet" id="sujet" className="input-field" type="text" />
                            </div>
                                <div className="field">
                                <label htmlFor="votre_message"></label>
                                <textarea placeholder="Votre message" id="votre_message" className="input-field input-size"></textarea>
                            </div>
                            <div className="btn-form-contact">
                                <button className="button1">Envoyer mon message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionContact;