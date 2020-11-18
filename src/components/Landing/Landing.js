import React from 'react';
import { Fade } from 'react-slideshow-image';
import MainNavbar from '../MainNavbar/MainNavbar';
import WorkShowcase from '../WorkShowcase/WorkShowcase';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './landing.css';

const images = [
  `${require("../../images/bg-img1.jpg").default}`,
  `${require("../../images/bg-img2.jpg").default}`,
]

export default function Landing() {
  return (
    <div className="landing-container">
      <header >
        <MainNavbar />
        <Fade duration={4000} arrows={false} pauseOnHover={false}>
          <div className="each-fade">
            <div className="image-container">
              <img src={images[0]} alt=""/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={images[1]} alt=""/>
            </div>
          </div>
        </Fade>
      </header>
      <main>
        <div className="work-showcase">
          <WorkShowcase />          
        </div>
        <About />
      </main>
      <Footer />
    </div>
  )
}
