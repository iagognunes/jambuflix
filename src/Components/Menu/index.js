import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Menu.css';

//import Button from '../Button';
// import CadastroVideo from '../../pages/cadastro/video'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Jambuflix logo" />
      </Link>

      {/* <Button as={Link} className="ButtonLink" to="/jambuadmin/cadastroVideo">
        Novo Vídeo
      </Button> */}
    </nav>
  );
}

export default Menu;
