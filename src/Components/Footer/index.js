import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/iagognunes/">
        <img src="https://i.imgur.com/pLRZiJr.png" alt="Logo Jambuflix" />
      </a>
      <p>
        Criado por
        {' '}
        <a href="https://www.linkedin.com/in/iagognunes/">
          Iago G. Nunes
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
