import React from "react";
import "./MobileApps.scss";
import mobileOne from "../../Resources/mobile-one.jpeg";
import mobileTwo from "../../Resources/mobile-two.jpeg";
import finalyzeMobile2 from '../../Resources/finalyze_mobile_2.0.jpg'
import { Link } from "react-router-dom";

type Props = {};

const MobileApps = (props: Props) => {
  return (
    <div className="MobileApps">
      <div className="mobile-intro">
        <div className="mobile-text">
          <h1>L-IT Mobile Apps</h1>
          <p>
            We build custom mobile apps for Android and iOS platforms
            prioritizing user experience and performance. We leverage the latest
            technologies to build scalable and secure apps to serve our client's
            needs.
          </p>
        </div>
        <span className="triangle-one"></span>
        <span className="triangle-one two"></span>
        <span className="triangle-one three"></span>
        <span className="triangle-one four"></span>
      </div>
      <div className="budget">
        <h2>Tell Us about your App</h2>
        <label htmlFor="">
          Email Address:
          <input type="text" placeholder="Enter your email address" />
        </label>
        <label htmlFor="">
          Type of App:
          <input type="text" placeholder="ECommerce, Guides, etc" />
        </label>
        <label htmlFor="">
          Budget:
          <input type="text" placeholder="Your budget" />
        </label>
        <button>Get Started . . .</button>
      </div>
      <div className="portfolio">
        <h2>Our Apps Portfolio</h2>
        <div className="portfolio-container">
          <div className="row-one-add">
            <div className="left">
              <img src={finalyzeMobile2} alt="" />
              <div className="screen-text">
                <Link to='/services/mobile_apps/finalyze_2.0'><h3>Finalyze Mobile 2.0</h3></Link>
                <span>
                  Development status: <p>Deployed</p>
                </span>
                <span>
                  Description:{" "}
                  <p>Mobile budgeting app to help with your financial needs.</p>
                </span>
              </div>
            </div>
          </div>
          <div className="row-one">
            <div className="left">
              <img src={mobileTwo} alt="" />
              <div className="screen-text">
                <h3>Finalyze Mobile 1.0</h3>
                <span>
                  Development status: <p>Deployed</p>
                </span>
                <span>
                  Description:{" "}
                  <p>Mobile budgeting app to help with your financial needs.</p>
                </span>
              </div>
            </div>
            <div className="right">
              <img src={mobileOne} alt="" />
              <div className="screen-text">
                <h3>Apprisals</h3>
                <span>
                  Development status: <p>Deployed</p>
                </span>
                <span>
                  Description: <p>Employee evaluation and apprisal system.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-meta">
        <p></p>
      </div>
    </div>
  );
};

export default MobileApps;
