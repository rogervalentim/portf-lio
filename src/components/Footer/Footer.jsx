import React from "react";
import "./Footer.css";

import Icons from '../Icons/Icons';

function Footer() {
  return (
    <>
      <footer>
        <p className="text-footer">Feito por Roger valentim 2022</p>
        <div className="social-media-footer">
          <Icons />
        </div>
      </footer>
    </>
  );
}

export default Footer;
