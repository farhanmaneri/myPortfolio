import React from "react";
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
function HeaderSocial() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/farhan-khan-a953038b/" target="_blank">
        <BsLinkedin  />
      </a>
      <a href="//github.com/farhanmaneri" target="_blank">
        <FaGithub />
      </a>
      <a href="https://wa.me/923133134555" target="_blank">
        <BsWhatsapp  />
      </a>

    </div>
  );
}

export default HeaderSocial;
