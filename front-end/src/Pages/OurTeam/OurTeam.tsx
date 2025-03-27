import React from "react";
import "./OurTeam.scss";
import { RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import mugita from '../../Resources/portrait.png'
import mato from '../../Resources/mato.png'
import flynn from '../../Resources/flynn.png'

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <div className="OurTeam">
      <h1>Our Team</h1>
      <p>
        The future is in the hands of the next generation.
      </p>
      <div className="team-container">
        <div className="team-member">
          <img src={mato} alt="" />
          <div className="team-text">
            <h2>Martin Nzomo</h2>
            <p>Lead Back-End Engineer</p>
            <div className="socials">
              <RiTwitterFill id="icon" />
              <RiLinkedinFill id="icon" />
            </div>
          </div>
        </div>
        <div className="team-member">
          <img src={mugita} alt="" />
          <div className="team-text">
            <h2>Bernard Mugita</h2>
            <p>Lead Front-End Engineer</p>
            <div className="socials">
              <RiTwitterFill id="icon" />
              <RiLinkedinFill id="icon" />
            </div>
          </div>
        </div>
        <div className="team-member">
          <img src={flynn} alt="" />
          <div className="team-text">
            <h2>Francis Flynn</h2>
            <p>Content Manager</p>
            <div className="socials">
              <RiTwitterFill id="icon" />
              <RiLinkedinFill id="icon" />
            </div>
          </div>
        </div>
        {/* <div className="team-member">
                <img src="" alt="" />
                <div className="team-text">
                    <h2>Dennis Sande</h2>
                    <p>Front-End Engineer</p>
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default OurTeam;
