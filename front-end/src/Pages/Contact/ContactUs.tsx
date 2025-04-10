import React from "react";
import "./ContactUs.scss";
import { MdSend, MdSupportAgent } from "react-icons/md";
import mugita from "../../Resources/portrait.png";
import jenzilit from "../../Resources/jenzi-logo-lit-mass.png";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="ContactUs">
      <div className="top">
        <div className="left">{/* <img src={jenzilit} alt="" /> */}</div>
        <div className="right">
          <h1>
            Contact Us <MdSupportAgent />
          </h1>
          <p>
            We'd Like To Hear From you!
            <br></br> You can speak directly to our representative below or send
            us a message and we'll get back to you momentarily.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="representatives">
          <div className="rep">
            <div className="up">
              <div className="text">
                <img src={mugita} alt="" />
                <h3>Bernard Mugita</h3>
              </div>
              <p>jeromemugita@jenzilabs.co.ke</p>
            </div>
          </div>
        </div>
        <h2>Or, Use the form.</h2>
        <p id="form-text">Leave us a message and we'll get back to you.</p>
        <form action="">
          <label htmlFor="">
            <p>Your name:</p>
            <input type="text" placeholder="Who should we call you?" />
          </label>
          <label htmlFor="">
            <p>Your email:</p>
            <input type="text" placeholder="Your email" />
          </label>
          <label htmlFor="" id="textarea">
            <p>Your Message:</p>
            <textarea
              name=""
              id=""
              placeholder="Tell us something, anything."
            />
          </label>
          <div className="button">
            <button onClick={() => {}}>
              Submit <MdSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
