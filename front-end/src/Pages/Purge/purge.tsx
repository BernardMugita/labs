import React from "react";
import "./purge.scss";
import { Link } from "react-router-dom";

type Props = {};

const Purge = (props: Props) => {
  return (
    <div className="Purge">
      <h1>Finalyze Data Manager</h1>
      <p>
        Welcome to Finalyze Data Manager, this interface allows you, our user,
        the option of deleting all your data with Finalyze.
      </p>
      <div className="items">
        <p>* Messages</p>
        <p>* Settings & preferences</p>
        <p>* Any user associated data</p>
      </div>
      <span>
        Note that this will mean purging your data permanently, this action
        cannot be reversed or undone.
      </span>
      <p>You'll need your <strong>Email</strong> and to confirm the<strong> terms of service {""}</strong>below.</p>
      <div className="notify">
        <label htmlFor="">
          <input type="text" placeholder="Please enter your email address" />
          <button>Delete My Data</button>
        </label>
        <label htmlFor="" id="check">
          <div>
            By clicking here, you are agree to our{" "}
            <Link to="/services/mobile_apps/finalyze_2.0/privacy_policy">
              Terms of service
            </Link>
            .
          </div>
          <input type="checkbox" name="" />
        </label>
      </div>
    </div>
  );
};

export default Purge;
