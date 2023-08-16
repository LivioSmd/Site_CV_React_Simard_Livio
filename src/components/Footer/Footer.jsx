import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='infos'>
            <div className='github-p'>
                <p>Github</p>
                <Link to={'https://github.com/LivioSmd'}>
                    <button className='btn'>
                        <FontAwesomeIcon icon={faCodeBranch} className='github'/>
                    </button>
                </Link>
            </div>
            <div className='linkedin-p'>
                <p>Linkedin</p>
                <Link to={'https://www.linkedin.com/in/livio-simard-10b5b6256/'}>
                <button className='btn'>
                        <FontAwesomeIcon icon={faLink} className='linkedin'/>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Footer;