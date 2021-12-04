import React from "react";
import htmlLogo from "../images/html-logo.png";
import cssLogo from "../images/css-logo.png";
import jsLogo from "../images/js-logo.png";
import reactLogo from "../images/react-logo.png";
import reduxLogo from "../images/redux-logo.png";
import { Link } from "react-scroll";

export default function MainSkillsAside() {
  return (
    <aside>
      <nav className="main-skills-aside">
        <Link
          activeClass="active"
          to="htmlSkill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={htmlLogo} alt="logo html" />
        </Link>
        <Link
          activeClass="active"
          to="cssSkill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={cssLogo} alt="logo css" />
        </Link>
        <Link
          activeClass="active"
          to="jsSkill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={jsLogo} alt="logo javascript" />
        </Link>
        <Link
          activeClass="active"
          to="reactSkill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={reactLogo} alt="logo react" />
        </Link>
        <Link
          activeClass="active"
          to="reduxSkill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={reduxLogo} alt="logo redux" />
        </Link>
      </nav>
    </aside>
  );
}
