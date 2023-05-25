import React from "react";
import CTA from "./CTA";
import Me from "./../../assets/assets/myPicture.jpg";
import HeaderSocial from "./HeaderSocial";
import './header.css'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Farhan Khan</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial  />
        <div className="me">
          <img src={Me} alt="me" style={{height: "100%", marginLeft: "auto"}} />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
