import React, {  useEffect, useState} from 'react'
import MainNavbar from '../MainNavbar/MainNavbar';
import './landing.css';
import WorkShowcase from '../WorkShowcase/WorkShowcase';
import About from '../About/About';
import Footer from '../Footer/Footer';

import { makeStyles } from '@material-ui/core/styles';

const images = [
  'url("https://s3.amazonaws.com/gs-waymarking-images/33535c64-34ba-46bc-8f49-72abbf23419e.JPG")',
  `url(${require("../../images/bg-img2.jpg").default})`,

]

let currentSlide = 0;

export default function Landing() {
  const [image, setImage] = useState('url("https://s3.amazonaws.com/gs-waymarking-images/33535c64-34ba-46bc-8f49-72abbf23419e.JPG")');
  const [opacity, setOpacity] = useState(0);

  const useStyles = makeStyles({
    root: {
      height: '60vh',
      width: '100%',
      '&::before': {
        content: '""',
        backgroundImage: image,
        backgroundSize: 'cover',
        position: 'fixed',
        top: '-7rem',
        right: '0px',
        bottom: '8rem',
        left: '0px',
        zIndex: '-5',
        opacity: opacity,
        transition: 'opacity .5s'
      }
    }  
  })
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(1);
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setImage(images[currentSlide]);
    currentSlide = (currentSlide+1)%images.length;
  }

  const classes = useStyles();
  return (
    <div className="landing-container">
      <header className={classes.root} >
        <MainNavbar />
      </header>
      <main>
        <WorkShowcase />
        <About />
      </main>
      <Footer />
    </div>
  )
}
