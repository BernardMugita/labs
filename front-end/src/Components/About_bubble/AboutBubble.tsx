import React from "react";
import "./AboutBubble.scss";
import { MdBubbleChart } from "react-icons/md";

type Props = {};

const AboutBubble = (props: Props) => {
  return <div className="About_bubble">
    <div className="big_circle">
      <div className="small_circle">
        <MdBubbleChart id="bubble"/>
      </div>
    </div>
  </div>;
};

export default AboutBubble;
