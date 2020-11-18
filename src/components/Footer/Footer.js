import React from 'react'
import './footer.css';

const etsyLogo = require('../../images/etsyLogo.png').default;
const fbLogo = require('../../images/fbLogo.png').default;
const instagramLogo = require('../../images/instagramLogo2.png').default;

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="socialLogos">

          <li className="instagramLogo">
            <a href="https://www.instagram.com/richardalibertiart">
              <img src={instagramLogo}alt="Instagram Logo" />
              <h6>@richardalibeti_art</h6>              
            </a>
          </li>

          <li className="fbLogo">
            <a href="https://www.facebook.com/richardalibertiart">
              <img src={fbLogo} alt="Facebook Logo" />
              <h6>Richard Aliberti Fine Art</h6>
            </a>
          </li>

          <li className="etsyLogo">
            <a href="https://www.etsy.com/richardalibertiart">
              <img src={etsyLogo}alt="Etsy Logo" />
              <h6>@richardalibertiart</h6>
            </a>
          </li>
          
      </ul> 
      <h4>richard aliberti fine art</h4> 
    </footer>
  )
}
