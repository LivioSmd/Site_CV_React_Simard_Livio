import React from 'react';
import './BurgerMenu.css'
import { slide as Menu } from 'react-burger-menu'

class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <div className='Burger-div'>
            <Menu>
                <p className='Menu-text'>Menu</p>
                <button id="btn-nav-presentation-burger">Présentation</button>
                <button id="btn-nav-competences-burger">Compétences</button>
                <button id="btn-nav-portfolio-burger">Portfolio</button>
                <button id="btn-nav-contact-burger">Contact</button>
            </Menu>
        </div>
    );
  }
}

export default BurgerMenu;