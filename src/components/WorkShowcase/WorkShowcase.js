import React from 'react';
import './workshowcase.css';

export default function WorkShowcase() {
  return (
    <>
      <h3 id="grid-header"><em>crafting high end art for the past 30 years</em></h3>
      <div className="grid-container">  
        <div className="grid-item">
            <img src={require("../../images/circusLadies.JPG").default} alt="" />
            <div className="info">
                <h5>Two Circus Ladies</h5>
                <p>10"ht - $700</p>
                <p>etsy.com</p>
            </div>
        </div>

        <div className="grid-item">
            <img src={require("../../images/BronzeNude (2).JPG").default} alt="" />
            <div className="info">
                <h5>Bronze Nude</h5>
                <p>21"ht - $2500</p>
                <p>etsy.com</p>
            </div>
        </div>

        <div className="grid-item">
            <img src={require("../../images/punkRocker2.JPG").default} alt="" />
              <div className="info">
                <h5>Punk Rocker</h5>
                <p>3"x 8" - $525</p>
                <p>etsy.com</p>
            </div>
        </div>

        <div className="grid-item">
            <img src={require("../../images/bronzeTotem.JPG").default} alt="" />
            <div className="info">
                <h5>Bronze Totem Figure</h5>
                <p>10"ht - $700</p>
                <p>etsy.com</p>
            </div>
        </div>

        <div className="grid-item">
            <img src={require("../../images/citation1.JPG").default} alt="" />
            <div className="info">
                <h5>Citation</h5>
                <p>3 3/4"x 4"ht - $525</p>
                <p>etsy.com</p>
            </div>
        </div>

        <div className="grid-item">
            <img src={require("../../images/bishop3.JPG").default} alt="" />
            <div className="info">
                <h5>Bishop</h5>
                <p>3"x 6"ht - $900</p>
                <p>etsy.com</p>
            </div>
        </div>

        <div className="grid-item">
            <img src={require("../../images/recliningFigure.JPG").default} alt="" />
            <div className="info">
                <h5>Bronze Reclining Figure</h5>
                <p>3 1/2"x 10"ln - $750</p>
                <p>etsy.com</p>
            </div>
        </div>

        <div className="grid-item">
            <img src={require("../../images/femaleDancers.JPG").default} alt="" />
            <div className="info">
                <h5>Small Female Dancers</h5>
                <p>8"ht - $375</p>
                <p>etsy.com</p>
            </div>
        </div>
        
        <div className="grid-item">
            <img src={require("../../images/DSC_0112.JPG").default} alt="" />
            <div className="info">
                <h5>Shnoz</h5>
                <p>2"x 10" - $45</p>
                <p>etsy.com</p>
            </div>
        </div>

        <hr />
      </div>
    </>
  )
}
