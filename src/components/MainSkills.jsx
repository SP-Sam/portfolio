import React, { useState } from "react";
import htmlLogo from "../images/html-logo.png";
import cssLogo from "../images/css-logo.png";
import jsLogo from "../images/js-logo.png";
import reactLogo from "../images/react-logo.png";
import reduxLogo from "../images/redux-logo.png";
import "../styles/main-skills.css";

export default function MainSkills() {
  const skillState = {
    htmlSkill: false,
    cssSkill: false,
    jsSkill: false,
    reactSkill: false,
    reduxSkill: false,
  };

  const [skills, setSkills] = useState(skillState);

  function showSkillDetails(skill) {
    if (skills[skill] === false) {
      setSkills({
        ...skills,
        [skill]: true,
      });
    } else {
      setSkills({
        ...skills,
        [skill]: false,
      });
    }
  }

  return (
    <div className="main-skills">
      <h1>
        <span>Principais Habilidades</span> <span>(Hard skills)</span>
      </h1>
      <section id="htmlSkill" onClick={() => showSkillDetails("htmlSkill")}>
        <span>
          <b>HTML</b>
        </span>
        <img src={htmlLogo} alt="logo html" />
        {skills.htmlSkill ? (
          <p>
            HTML Semântico com utilização de tags para otimizar leitores de tela
            e acessibilidade.
          </p>
        ) : (
          ""
        )}
      </section>

      <section id="cssSkill" onClick={() => showSkillDetails("cssSkill")}>
        <span>
          <b>CSS</b>
        </span>
        <img src={cssLogo} alt="logo css" />
        {skills.cssSkill ? (
          <div>
            <p>Criação de layouts com Flexbox;</p>
            <p>Criação de layouts responsivos (Mobile First).</p>
          </div>
        ) : (
          ""
        )}
      </section>

      <section id="jsSkill" onClick={() => showSkillDetails("jsSkill")}>
        <span>
          <b>JavaScript</b>
        </span>
        <img src={jsLogo} alt="logo javascript" />
        {skills.jsSkill ? (
          <div>
            <p>Manipulação do DOM;</p>
            <p>Manipulação do Web Storage (Local e Session Storage);</p>
            <p>
              Domínio das HOFs (forEach, map, filter, find, some, every, sort,
              reduce);
            </p>
            <p>
              Domínio das features do ES6 (spread operator, rest parameter,
              destructuring, default parameter, etc);
            </p>
            <p>
              Domínio com JavaScript assíncrono e callbacks (then/catch,
              async/await) e consumo de APIs Rest.
            </p>
          </div>
        ) : (
          ""
        )}
      </section>

      <section id="reactSkill" onClick={() => showSkillDetails("reactSkill")}>
        <span>
          <b>React</b>
        </span>
        <img src={reactLogo} alt="logo react" />
        {skills.reactSkill ? (
          <div>
            <p>Aplicações bem componentizadas;</p>
            <p>Manipulação de estado;</p>
            <p>Domínio do ciclo de vida dos componentes;</p>
            <p>Criação de rotas com React Router Dom.</p>
          </div>
        ) : (
          ""
        )}
      </section>

      <section id="reduxSkill" onClick={() => showSkillDetails("reduxSkill")}>
        <span>
          <b>Redux</b>
        </span>
        <img src={reduxLogo} alt="logo redux" />
        {skills.reduxSkill ? <p>Manipulação de estado global</p> : ""}
      </section>
    </div>
  );
}
