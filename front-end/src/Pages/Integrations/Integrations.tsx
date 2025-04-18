import "./Integrations.scss";
import { GrIntegration } from "react-icons/gr";
import { FaArrowAltCircleRight, FaArrowCircleDown } from "react-icons/fa";
import React from "react";
import { MdApi } from "react-icons/md";
import { SiHeadlessui } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaBots } from "react-icons/fa6";

type Props = {};

const Integrations: React.FC<Props> = ({}) => {
  return (
    <div className="Integrations">
      <section className="top">
        <div className="left">{/* <img src={jenzilit} alt="" /> */}</div>
        <div className="right">
          <h1>
            3rd Party Integrations <GrIntegration />
          </h1>
          <p>
            We help organizations integrate with various third-party <br />
            services to enhance their operations and improve efficiency. <br />
          </p>
          <button>
            Learn More <FaArrowCircleDown />
          </button>
        </div>
      </section>
      <section className="solutions">
        <div className="left">
          <h1>
            INTEGRATE <br />
            WITH US
          </h1>
          <p>
            3rd party integrations are structured setups that are designed{" "}
            <br />
            to add custom fuctionality to applications which do not change{" "}
            <br />
            the core application. <br /> <br />
          </p>
        </div>
        <div className="right">
          <div className="integration-container">
            <div className="head">
              <span>
                <MdApi id="auto-icon" />
              </span>
              <h3>API Integrations</h3>
            </div>
            <p>
              Want APIs developed and intergrated with your application? <br />
              We can help you with that. <br /> <br />
              We can develop API secure services from scratch or integrate{" "}
              <br />
              existing ones with your application. <br /> <br />
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="integration-container">
            <div className="head">
              <span>
                <SiHeadlessui id="auto-icon" />
              </span>
              <h3>Headless CRM</h3>
            </div>
            <p>
              We can help you integrate your CRM with other applications, <br />
              or connect your frontend directly to a headless CRM service.{" "}
              <br />
              <br />
              This is ideal if you don’t have a backend and want your UI to pull
              data from external sources.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="integration-container">
            <div className="head">
              <span>
                <RiSecurePaymentFill id="auto-icon" />
              </span>
              <h3>Payment Integrations</h3>
            </div>
            <p>
              Online payment integrations are a must for any e-commerce or{" "}
              <br />
              money transfer application. <br /> <br />
              We can help you integrate your application with secure payment
              gateways of your choice.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="integration-container">
            <div className="head">
              <span>
                <FaBots id="auto-icon" />
              </span>
              <h3>Custom Bots</h3>
            </div>
            <p>
              Custom Bots can be integrated with your application to provide
              extra functionality. <br /> <br />
              The upside is the customization capabilities, the bots are
              tailored to your organization's. <br />
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </section>
      {/* <div className="divider"></div> */}
      <section className="more">
        <h2>We'd like to hear from you</h2>
        <div className="form">
          <label htmlFor="">
            <p>Email Address:</p>
            <input type="text" placeholder="Enter your email address" />
          </label>
          <label htmlFor="">
            <p id="mes-label">Message:</p>
            <textarea placeholder="What kind of integration are you looking for?" />
          </label>
          <button>Submit . . .</button>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
