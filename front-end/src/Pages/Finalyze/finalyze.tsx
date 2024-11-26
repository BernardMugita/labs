import React from "react";
import Mobile from "../../Resources/finalyze_mobile_2.0.jpg";
import Tablet from "../../Resources/finalyze_tablet_2.0.jpg";

import "./finalyze.scss";
import { MdAndroid, MdShare, MdStarOutline } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { GrCopy } from "react-icons/gr";
import { Link } from "react-router-dom";

type Props = {};

const Finalyze = (props: Props) => {
  return (
    <div className="Finalyze">
      <div className="finalyze-banner">
        <div className="left">
          <h4>Intoducing</h4>
          <div className="heading">
            <span>
            <h1>FINALYZE</h1>
              <p>2.0</p>
            </span>
          </div>
          <div className="place"></div>
          <p>
            We are happy to introduce <strong>Finalyze 2.0</strong>! A
            revolutionizing mobile budgeting solution for anyone and everyone.
          </p>
        </div>
        <div className="right">
          <img id="tablet" src={Tablet} alt="" />
          <img id="mobile" src={Mobile} alt="" />
        </div>
      </div>
      <div className="finalyze-body">
        <div className="left">
          <h1>
            About App
            <span>
              <MdShare /> <GrCopy />
            </span>
          </h1>
          <p>
            Finalyze mobile budgeting app allow you to create and customize your
            budgets allowing you to monitor your expenditure to the last
            shilling. It's features include message syncing, auto syncing,
            budget tracking, notifications on budgets and financial tracking.
            Apart from budgeting, Finalyze accompanies the user's budgets and
            expenditure with relevant graphs and charts to help them visualize
            the distribution of their budgets.
          </p>
          <div className="actions">
            <Link id="privacy" to="/services/mobile_apps/finalyze_2.0/privacy_policy">
              Privacy policy
            </Link>
            <Link to="/services/mobile_apps/finalyze_2.0/purge_your_data" id="purge">Purge your data</Link>
          </div>
        </div>
        <div className="right">
          <div className="card">
            <h4>Prerequisites</h4>
            <label id="rate">
              Playstore rating:
              <span>
                <MdStarOutline />
                <MdStarOutline />
                <MdStarOutline />
                <MdStarOutline />
                <MdStarOutline />
              </span>
            </label>
            <label id="size">
              Size:
              <h1>8Mbs</h1>
            </label>
            <label id="comp">
              Compatibility:
              <span>
                <MdAndroid />
              </span>
            </label>
            <button><FaGooglePlay id="play"/> Try on Playstore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finalyze;
