import React from "react";
import "./About.scss";
import AboutBubble from "../../Components/About_bubble/AboutBubble";
import DoubleCircle from "../../Components/AppComponents/DoubleCircle/DoubleCircle";
import {
  RiEmotionHappyFill,
  RiEye2Fill,
  RiHandHeartFill,
  RiInfinityFill,
  RiSpaceShipFill,
} from "react-icons/ri";
import { GiFlexibleStar, GiTriangleTarget } from "react-icons/gi";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="About">
      <div className="intro_banner">
        <div className="left">
          <h1>About Us</h1>
        </div>
        <div className="right">
          <AboutBubble />
        </div>
      </div>
      <div className="about_us">
        <DoubleCircle />
        <p>
          We are a Mobile and Website Development start-up based in Nairobi
          Kenya that finds creative ways to solve clients problems leveraging on
          new technologies.
        </p>
        <p>
          L-IT is a visionary organization that targets to spread technological
          aid to different Kenyans through mobile apps and web solutions. We
          create apps fully run and maintained by us to provide you with
          services.
        </p>
      </div>
      <div className="mission-vision">
        <h1>Our Mission & Vision</h1>
        <div className="container">
          <div className="cont-item">
            <h1 className="heading">
              <RiSpaceShipFill /> Mission
            </h1>
            <div className="body">
              <p>
                Our Mission is to provide steadfast and reliable mobile and web
                solutions that leverage on data to help decision makers plan for
                the future.
              </p>
            </div>
          </div>
          <div className="cont-item">
            <h1 className="heading">
              <RiEye2Fill /> Vision
            </h1>
            <div className="body">
              <p>
                In the near future we envision a world where technology has
                solved our grass root problems and we are the ones leading the
                way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="core-values">
        <div className="back">
          <div className="heading-circle">
            <div className="bubble">Our Core Values</div>
            <h1>
              <RiHandHeartFill id="heart" />
            </h1>
          </div>
        </div>
        <div className="values-body">
          <div className="value">
            <span>
              <GiTriangleTarget />
            </span>
            Meaningful Solutions
          </div>
          <div className="value">
            <span>
              <RiInfinityFill />
            </span>
            Grass Root Solutions
          </div>
          <div className="value">
            <span>
              <GiFlexibleStar />
            </span>
            Data Centered
          </div>
          <div className="value">
            <span>
              <RiEmotionHappyFill />
            </span>
            Customer Centered
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
