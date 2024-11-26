import React from "react";
import "./Home.scss";
import BlobWidget from "../../Components/Blob widget/BlobWidget";
import screen from "../../Resources/screen.jpeg";
import {
  RiCss3Fill,
  RiFlutterFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
} from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { GrAndroid, GrNode } from "react-icons/gr";
import {
  SiDjango,
  SiIos,
  SiMongodb,
  SiMysql,
  SiPython,
  SiSass,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import webimage from "../../Resources/web_image.png";
import phoneweb from "../../Resources/phone_web.jpeg";
import TestimonialWidget from "../../Components/Testimonial widget/TestimonialWidget";
import TestimonialsContainer from "../../Components/TestimonialsContainer/TestimonialsContainer";
import finalyze from '../../Resources/finalL.png'
import cri from '../../Resources/cri.png'
import jaister from "../../Resources/Jaister-logo.png";
import nafuu from "../../Resources/Nafuu.png"
import zen from "../../Resources/logo-des.png"
import green from "../../Resources/greenw.png"
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="Home">
      <div className="banner">
        <div className="left">
          <BlobWidget />
          <div className="banner_text">
            <h1>FINALYZE LABS</h1>
            <p>Reliable Mobile and Web-based Solutions</p>
            <Link to='/services/mobile_apps'>Get Started</Link>
          </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="mobile_design">
        <div className="left">
          <h1>Custom Modern Mobile Solutions</h1>
          <p>
            We build custom mobile apps for Android and iOS platforms
            prioritizing user experience and performance. We leverage the latest
            technologies to build scalable and secure apps to serve our client's
            needs.
          </p>
          <br />
          <br />
          <div className="meta">
            <div className="packages">
              <h4>Packages used:</h4>
              <ul>
                <li>
                  <TbBrandReactNative id="icon" /> React Native
                </li>
                <li>
                  <RiFlutterFill id="icon" />
                  Flutter
                </li>
              </ul>
            </div>
            <div className="platforms">
              <h4>Platforms:</h4>
              <ul>
                <li>
                  <GrAndroid id="icon" /> Android
                </li>
                <li>
                  <SiIos id="icon" /> iOS
                </li>
              </ul>
            </div>
          </div>
          <button>More . . .</button>
        </div>
        <div className="right">
          <img src={screen} alt="mobile_design" />
        </div>
      </div>
      <div className="websites">
        <div className="top">
          <h1>Websites</h1>
          <img src={webimage} alt="web_image" />
          <img src={phoneweb} alt="" />
        </div>
        <div className="bottom">
          <p>
            We build custom responsive websites for our clients using the latest
            technologies to create fast, secure, and scalable websites. We
            prioritize user experience and performance while ensuring that we
            meet our client's needs.
          </p>
          <h4>Our websites are built using</h4>
          <div className="types">
            <div className="complex">
              <ul>
                <li>
                  <SiWordpress id="icon" /> WordPress
                </li>
              </ul>
            </div>
            <div className="complex">
              <ul>
                <li>
                  <RiHtml5Fill id="icon" /> HTML
                </li>
                <li>
                  <RiCss3Fill id="icon" /> CSS
                </li>
                <li>
                  <RiJavascriptFill id="icon" /> JavaScript
                </li>
              </ul>
            </div>
            <div className="complex">
              <ul>
                <li>
                  <RiReactjsFill id="icon" /> React
                </li>
                <li>
                  <SiSass id="icon" /> Sass
                </li>
                <li>
                  <SiTypescript id="icon" /> TypeScript
                </li>
                <li>
                  <GrNode id="icon" /> Node
                </li>
                <li>
                  <SiMongodb id="icon" /> MongoDB
                </li>
              </ul>
            </div>
            <div className="complex">
              <ul>
                <li>
                  <SiPython id="icon" /> Python
                </li>
                <li>
                  <SiDjango id="icon" />
                  Django
                </li>
                <li>
                  <SiMysql id="icon" /> MySQL
                </li>
              </ul>
            </div>
          </div>
          <button>More . . .</button>
        </div>
      </div>
      <div className="testimonials">
        <TestimonialWidget />
        <div className="testimonials_text">
          <h1>What Do they Say About Us</h1>
        </div>
        <div className="testimonials_container">
          <TestimonialsContainer />
          <TestimonialsContainer />
        </div>
      </div>
      <div className="our_clients">
        <h1>Our Partners & Clients</h1>
        <p>
          We have worked for these clients in the past in either development or
          offering technical support. We are proud to have worked with them and
          we look forward to working with you too.
        </p>
        <div className="section_body">
          <div className="partners">
            <h4>Partners</h4>
            <div className="list">
              <div className="list_item">
                <img src={finalyze} alt="" id="fin"/>
                {/* <p>Finalyze</p> */}
              </div>
              <div className="list_item">
                <img src={jaister} alt="" />
                {/* <p>Jaister</p> */}
              </div>
            </div>
          </div>
          <div className="customers">
            <h4>Customers</h4>
            <div className="list">
              <div className="list_item">
                <img src={cri} alt="" />
                {/* <p>CRI East Africa</p> */}
              </div>
              <div className="list_item">
                <img src={zen} alt="" />
                {/* <p>Chocolate Zen</p> */}
              </div>
              <div className="list_item">
                <img src={green} alt="" id="green"/>
                {/* <p>Greenwaters Farm</p> */}
              </div>
              <div className="list_item">
                <img src={nafuu} alt="" />
                {/* <p>PlauseMediaKE</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
