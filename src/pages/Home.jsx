import React, { Component } from 'react'
import Header from '../components/Header';
import MainSkill from '../components/MainSkill';
import MainSkillsAside from '../components/MainSkillsAside';
import fotoPerfil from '../images/foto-perfil.jpeg';
import '../styles/home.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home">
          <main>
            <div className="personal-infos">
              <h3>Desenvolvedor Fron-end</h3>
              <h1>Samuel<br />Pereira</h1>
              <p>
                Sou um jovem apaixonado por tecnologia e em constante
                desenvolvimento na área da programação Web, 
                tenho experiência com HTML5, CSS3, e JavaScript ES6 e React.Js,
                Gosto muito de front-end mas quero desenvolver meus conhecimentos
                no back-end para ser um profissional completo.
              </p>
            </div>

            <div className="main-image">
              <img
                src={ fotoPerfil }
                alt="Foto de Samuel Pereira"
              />
            </div>
          </main>

          <MainSkillsAside />
        </div>
        <MainSkill />
      </>
    )
  }
}
