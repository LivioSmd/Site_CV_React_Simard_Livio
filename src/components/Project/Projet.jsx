import React, { useState } from 'react';
import './Projet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Projet = ({ titre, imagePrincipale, imagesSecondaires, date, mission, epreuves, outils }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div >
      <div className="projects-container" id="projectsContainer">
      <div className="card" style={{ backgroundImage: `url(${imagePrincipale})` }}>
          <div className="overlay">
            <button className="card-btn" onClick={openModal}>
              {titre}
            </button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
          <div className="divTitle">
                <div className="titre-desc-modale">
                    <p>{titre}</p>
                    <p className="titre-secondaire-modal">Année: {date}</p>
                    <p className="titre-secondaire-modal">Mission: {mission}</p>
                    <p className="titre-secondaire-modal">Difficultés: {epreuves}</p>
                    <p className="titre-secondaire-modal all-outils">Technologies utilisées: {outils.map((outils) => (<p>{outils},</p>))}</p>
                </div>
                <div>
                    {imagesSecondaires.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index}`} className="allSecondaireImage"/>
                     ))}
                    <button className="close-modal-btn" onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projet;


