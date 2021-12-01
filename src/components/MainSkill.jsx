import React, { Component } from 'react'
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import jsLogo from '../images/js-logo.png';
import reactLogo from '../images/react-logo.png';
import reduxLogo from '../images/redux-logo.png';
import '../styles/main-skills.css';

export default class MainSkill extends Component {
  constructor() {
    super();

    this.state = {
      htmlSkill: false,
      cssSkill: false,
      jsSkill: false,
      reactSkill: false,
      reduxSkill: false,
    };

    this.showSkillTedails = this.showSkillTedails.bind(this);
  }

  showSkillTedails(skill) {
    if (this.state[skill] === false) {
      this.setState({
        [skill]: true,
      })
    } else {
      this.setState({
        [skill]: false,
      })
    }
  }

  render() {
    const {
      htmlSkill,
      cssSkill,
      jsSkill,
      reactSkill,
      reduxSkill,
    } = this.state;
  
    return (
      <div className="main-skills">
        <h1>Principais Habilidades (Hard skills)</h1>
        <section id="htmlSkill" onClick={ () => this.showSkillTedails('htmlSkill') }>
          <span><b>HTML</b></span>
          <img src={ htmlLogo } alt="logo html"/>
          {htmlSkill
            ? (
              <p>
                HTML Semântico com utilização de tags para
                otimizar leitores de tela e acessibilidade.
              </p>
            ) : ''}
        </section>

        <section id="cssSkill" onClick={ () => this.showSkillTedails('cssSkill') }>
          <span><b>CSS</b></span>
          <img src={ cssLogo } alt="logo css"/>
          {cssSkill
            ? (
              <div>
                <p>
                  Criação de layouts com Flexbox;
                </p>
                <p>
                  Criação de layouts responsivos (Mobile First).
                </p>
              </div>
            ) : ''}
        </section>

        <section id="jsSkill" onClick={ () => this.showSkillTedails('jsSkill') }>
          <span><b>JavaScript</b></span>
          <img src={ jsLogo } alt="logo javascript"/>
          {jsSkill
            ? (
              <div>
                <p>
                  Manipulação do DOM;
                </p>
                <p>
                  Manipulação do Web Storage (Local e Session Storage);
                </p>
                <p>
                  Domínio das HOFs (forEach, map, filter, find, some, every, sort, reduce);
                </p>
                <p>
                  Domínio das features do ES6 (spread operator, rest parameter,
                  destructuring, default parameter, etc);
                </p>
                <p>
                  Domínio com JavaScript assíncrono e callbacks
                  (then/catch, async/await) e consumo de APIs Rest.
                </p>
              </div>
            ) : ''}
        </section>

        <section id="reactSkill" onClick={ () => this.showSkillTedails('reactSkill') }>
          <span><b>React</b></span>
          <img src={ reactLogo } alt="logo react"/>
          {reactSkill
            ? (
              <div>
                <p>
                  Aplicações bem componentizadas;
                </p>
                <p>
                  Manipulação de estado;
                </p>
                <p>
                  Domínio do ciclo de vida dos componentes;
                </p>
                <p>
                  Criação de rotas com React Router Dom.
                </p>
              </div>
            ) : ''}
        </section>

        <section id="reduxSkill" onClick={ () => this.showSkillTedails('reduxSkill') }>
          <span><b>Redux</b></span>
          <img src={ reduxLogo } alt="logo redux"/>
          {reduxSkill
            ? <p>Manipulação de estado global</p>
            : ''}
        </section>
      </div>
    )
  }
}
