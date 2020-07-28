import React from 'react';
import Logo from '../../assets/logo.png';
import "./Menu.css";
import ButtonLink from './ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="LucasFlix logo"/>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;