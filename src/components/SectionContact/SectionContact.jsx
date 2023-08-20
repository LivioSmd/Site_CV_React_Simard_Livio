import React from 'react';
import './SectionContact.css';
import emailjs from 'emailjs-com'; // Import correctement le module emailjs-com


const SectionContact = () => {
  const onSubmit = (e) => { // Modifie Onsubmit en onSubmit et ajuste le paramètre
    e.preventDefault(); // Empêche le rechargement de la page
    alert('Merci pour votre message, il sera traité au plus vite 😀');
    const templateId = 'template_kbyursv';
    const serviceId = 'service_azc2b8m';
    const data = {
      nom: e.target.nom.value,
      prenom: e.target.prenom.value,
      email: e.target.email.value,
      sujet: e.target.sujet.value,
      message: e.target.votre_message.value,
    };
    sendFeedback(serviceId, templateId, data);
    e.target.reset();
  };

const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
        .send(serviceId, templateId, variables, 'GEg9jOR2Mm-fAsyKT')
        .then((res) => {
            console.log('succes');
        })
        .catch((err) => console.error('Il y a une erreur', err)); // Affiche l'erreur dans la console
  };

  return (
        <section className="sectionContact" id='ancre-contact'>
            <button className="title-btn">
                <span className="title-word">
                    C<span className="faulty-letter">o</span>ntact
                </span>
            </button>
            <div className="contact-div">
                <div className="title-img-contact">
                    <h3>N'hésitez pas à me contacter en utilisant ce formulaire pour que nous puissions commencer à collaborer ensemble.</h3>
                </div>
                <div className="form-container">
                    <form className="form" id="form" onSubmit={onSubmit}> 
                        <p id="heading">Fiche Contact</p>
                        <div className="div-nom-prenom">
                            <div className="field field-ligne">
                                <label htmlFor="nom"></label> 
                                <input autoComplete="off" placeholder="Nom" id="nom" className="input-field" type="text" name="nom" /> 
                            </div>
                            <div className="field field-ligne">
                                <label htmlFor="prenom"></label>
                                <input placeholder="Prénom" id="prenom" className="input-field" type="text" name="prenom" /> 
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email"></label> 
                            <input placeholder="Email" id="email" className="input-field" type="text" name="email" /> 
                        </div>
                        <div className="field">
                            <label htmlFor="sujet"></label> 
                            <input placeholder="Sujet" id="sujet" className="input-field" type="text" name="sujet" />
                        </div>
                        <div className="field">
                            <label htmlFor="votre_message"></label> 
                            <textarea placeholder="Votre message" id="votre_message" className="input-field input-size" name="message"></textarea> 
                        </div>
                        <div className="btn-form-contact" >
                            <button className="button1" type="submit">Envoyer mon message</button> 
                        </div>
                    </form>
                </div>
            </div>
        </section>
  );
};

export default SectionContact;
