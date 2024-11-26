import React from "react";
import "./WebDevelopment.scss";
import finalyzeMobile from "../../Resources/phone_web.jpeg";
import finalyzeWeb from "../../Resources/web_image.png";
import jaisterWeb from "../../Resources/jaister_web.png"
import jaisterMobile from "../../Resources/jaister_mobile.jpeg"
import nafuuWeb from "../../Resources/nafuu_web.png"
import bysajeWeb from "../../Resources/bysaje_web.png"
import bysajeMobile from "../../Resources/bysaje_mobile.jpeg"

type Props = {};

const WebDevelopment = (props: Props) => {
  return (
    <div className="WebDevelopment">
      <div className="web-intro">
        <div className="web-text">
          <h1>Websites By L-IT</h1>
          <p>
            We build custom responsive websites for our clients using the latest
            technologies to create fast, secure, and scalable websites. We
            prioritize user experience and performance while ensuring that we
            meet our client's needs.
          </p>
        </div>
        <span className="triangle-one"></span>
        <span className="triangle-one two"></span>
        <span className="triangle-one three"></span>
        <span className="triangle-one four"></span>
      </div>
      <div className="budget">
        <h2>Tell us about your dream Website</h2>
        <label htmlFor="">
          Email Address:
          <input type="text" placeholder="Enter your email address" />
        </label>
        <label htmlFor="">
          Type of Website:
          <input type="text" placeholder="ECommerce, Guides, etc" />
        </label>
        <label htmlFor="">
          Your Budget:
          <input type="text" placeholder="Your budget" />
        </label>
        <button>Get Started . . .</button>
      </div>
      <div className="portfolio">
        <h2>Our Website Portfolio</h2>
        <div className="row-one">
          <div className="left">
            <div className="top">
              <img src={finalyzeWeb} alt="" id="web" />
              <img src={finalyzeMobile} alt="" id="mobile" />
            </div>
            <div className="bottom">
              <h4>Finalyze Website</h4>
              <div className="decoration"></div>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <img src={jaisterWeb} alt="" id="web" />
              <img src={jaisterMobile} alt="" id="mobile" />
            </div>
            <div className="bottom">
              <h4>Jaister Technologies</h4>
              <div className="decoration"></div>
            </div>
          </div>
        </div>
        <div className="row-one">
          <div className="left">
            <div className="top">
              <img src={nafuuWeb} alt="" id="web" />
              {/* <img src="" alt="" id="mobile" /> */}
            </div>
            <div className="bottom">
              <h4>Nafuu Classic Hardware</h4>
              <div className="decoration"></div>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <img src={bysajeWeb} alt="" id="web" />
              <img src={bysajeMobile} alt="" id="mobile" />
            </div>
            <div className="bottom">
              <h4>Chocolate Zen</h4>
              <div className="decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
