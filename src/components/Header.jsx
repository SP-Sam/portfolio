import React, { Component } from 'react';
import fotoPerfil from '../images/foto-perfil.jpeg';
import emailLogo from '../images/email-icon.png';
import curriculo from '../files/samuel-curriculo.pdf';
import downloadIcon from '../images/download-icon.jpg';
import linkedinLogo from '../images/linkedin-logo.png';
import githubLogo from '../images/github-logo.png';
import '../styles/header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="comunication">
          <Link to="/">
            <img
              src={ fotoPerfil }
              alt="Foto de perfil"
              className="samuel-image"
            />
          </Link>

          <a href="mailto:pro_samuel@outlook.com">
            <img
              src={ emailLogo }
              alt="Icone de email"
            />
            <span>pro_samuel@outlook.com</span>
          </a>
          <a href={ curriculo } download>
            <img
              src={ downloadIcon }
              alt="Icone de download"
            />
            <span>Baixar currículo</span>
          </a>
        </nav>

        <nav className="social-links">
          <a
            href="https://www.linkedin.com/in/spsam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ linkedinLogo } alt="Linkedin"/>
          </a>
          
          <a
            href="https://github.com/SP-Sam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ githubLogo } alt="GitHub"/>
          </a>
        </nav>
      </header>
    )
  }
}
