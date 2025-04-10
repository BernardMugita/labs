import React from "react";
import "./AboutBubble.scss";
import jenzi from '../../Resources/jenzi-logo-white.png'

type Props = {};

const AboutBubble = (props: Props) => {
  return <div className="About_bubble">
    <div className="big_circle">
      <div className="small_circle">
        <img src={jenzi} alt="" />
      </div>
    </div>
  </div>;
};

export default AboutBubble;
