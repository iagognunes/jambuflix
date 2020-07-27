import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css'
//import ButtonLink from './Components/ButtonLink';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="Jambuflix logo" />
            </a>

            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;