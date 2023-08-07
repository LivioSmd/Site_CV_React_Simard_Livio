import React, {useState} from 'react';
import './Projet.css'

const Projet = ({titre, imagePrincipale, imagesSecondaires, date, mission, epreuves, outils}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        const modal = document.getElementById('modal');
        setIsOpen(true);
    }

    return (
        <div className="all-cards-portfolio">
            <div className="projects-container" id="projectsContainer">
            <div className="card" style={{ backgroundImage: `url(${imagePrincipale})` }}>
                    <div className="overlay">
                        <button className="card-btn" onClick={(e) => handleClick(e)}>{titre}</button>
                    </div>
                </div>
            </div>
            {isOpen &&
               <div className="modal" id="modal">
                    <span className="close" id="closeModal">x</span>
                    <div className="modal-content" id="modalContent">
                        <div className="div-img-text">
                            <div className="divTitle">
                                <div className="titre-desc-modale">
                                <p>{titre}</p>
                                <p className="titre-secondaire-modal">Année: {date}</p>
                                <p className="titre-secondaire-modal">Mission: {mission}</p>
                                <p className="titre-secondaire-modal">Difficultés: {epreuves}</p>
                                <p className="titre-secondaire-modal">Technologies utilisées: {outils}</p>
                                </div>
                            </div>
                            {imagesSecondaires.map((image, index) => (
                                <img key={index} src={image} alt={`Image Secondaire ${index}`} className="img-secondaire" />
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Projet;
