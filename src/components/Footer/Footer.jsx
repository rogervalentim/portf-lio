import React from "react";
import "./Footer.css";

import Icons from '../Icons/Icons';


function Footer() {

  const d = new Date();
  let year = d.getFullYear(); 

  return (
    <>
      <footer>
        <p className="text-footer">Feito por Roger valentim {year}</p>
        <div className="social-media-footer">
          <Icons />
        </div>
      </footer>
    </>
  );
}

export default Footer;
