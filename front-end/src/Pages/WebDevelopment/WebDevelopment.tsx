import React from "react";
import "./WebDevelopment.scss";
import finalyzeMobile from "../../Resources/phone_web.jpeg";
import finalyzeWeb from "../../Resources/finalyze-web-new.png";
import arifuWeb from "../../Resources/arifu-desk.png";
import arifuMobile from "../../Resources/arifu-mob.jpeg";
import stroke from "../../Resources/bg-stroke.png";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

type Props = {};

const WebDevelopment = (props: Props) => {
  return (
    <div className="WebDevelopment">
      <div className="web-intro">
        <div className="web-text">
          <h1>Jenzi Sites</h1>
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
        <h2>Some of our sites</h2>
        <div className="row-one">
          <div className="left">
            <div className="top">
              <img src={finalyzeWeb} alt="" id="web" />
              {/* <img src={finalyzeMobile} alt="" id="mobile" /> */}
            </div>
            <div className="bottom">
              <img src={stroke} alt="" />
              <div className="text">
                <h3>Finalyze Web</h3>
                <span>
                  Development status: <p>Deployed</p>
                </span>
                <span>
                  Description:{" "}
                  <p>
                    A financial budgetting app that helps users track their
                    expenses and stay on top of their finances.
                  </p>
                </span>
                <Link
                  to="https://finalyze.app/"
                  className="view-more"
                  target="_blank"
                >
                  <FaArrowCircleRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <img src={arifuWeb} alt="" id="web" />
              {/* <img src={arifuMobile} alt="" id="mobile" /> */}
            </div>
            <div className="bottom">
              <img src={stroke} alt="" />
              <div className="text">
                <h3>Arifu Library</h3>
                <span>
                  Development status: <p>Deployed</p>
                </span>
                <span>
                  Description:{" "}
                  <p>
                    Information library form university students with notes and
                    screen recordings.
                  </p>
                </span>
                <Link
                  to="https://arifulib.co.ke/"
                  className="view-more"
                  target="_blank"
                >
                  <FaArrowCircleRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
