import React from "react";
import "./ContactUs.scss";
import { MdSend } from "react-icons/md";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="ContactUs">
      <div className="top">
        <h1>Contact Us</h1>
        <p>
          We'd Like To Hear From you, you can speak directly to our
          representative below or send us a message and we'll get back to you in
          an instant.
        </p>
      </div>
      <div className="bottom">
        <div className="representatives">
          <div className="rep">
            <div className="up">
              <div className="text">
                <img src="" alt="" />
                <h3>Bernard Mugita</h3>
              </div>
              <p>mugitajerome@finalyze.app</p>
            </div>
          </div>
        </div>
        <h2>Or, Use the form.</h2>
        <p id="form-text">Leave us a message and we'll get back to you.</p>
        <form action="">
          <label htmlFor="">
            <p>Your name:</p>
            <input type="text" placeholder="What do we call you?" />
          </label>
          <label htmlFor="">
            <p>Your email:</p>
            <input type="text" placeholder="Where can we reach you?" />
          </label>
          <label htmlFor="" id="textarea">
            <p>Your Message:</p>
            <textarea name="" id="" placeholder="What would you like to tell us?" />
          </label>
          <div className="button">
            <button>
              Submit <MdSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
