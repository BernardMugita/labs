import React from "react";
import "./Automations.scss";
import { GiAutomaticSas } from "react-icons/gi";
import { FaArrowAltCircleRight, FaArrowCircleDown } from "react-icons/fa";
import {
  MdOutlineBackup,
  MdOutlineGeneratingTokens,
  MdOutlineMailOutline,
  MdOutlineNotifications,
} from "react-icons/md";

type Props = {};

const Automations = (props: Props) => {
  return (
    <div className="Automations">
      <section className="top">
        <div className="left">{/* <img src={jenzilit} alt="" /> */}</div>
        <div className="right">
          <h1>
            Automations <GiAutomaticSas />
          </h1>
          <p>
            Let us help you make your professional life easier. <br />
            We can automate your tasks and make your work more efficient.
          </p>
          <button>
            Learn More <FaArrowCircleDown />
          </button>
        </div>
      </section>
      <section className="tools">
        <div className="left">
          <h1>
            AUTOMATION <br />
            TOOLS
          </h1>
          <p>
            We have a wide range of automation tools that can help you
            streamline your workflow and increase productivity.
          </p>
        </div>
        <div className="right">
          <div className="tool-container">
            <div className="head">
              <span>
                <img src="" alt="" />
              </span>
              <h3>Pipedream</h3>
            </div>
            <p>
              Automate your workflows with Pipedream. <br />
              Connect your apps and automate your tasks.
            </p>
            <a href="">
              Learn more <FaArrowAltCircleRight />
            </a>
          </div>
          <div className="tool-container">
            <div className="head">
              <span>
                <img src="" alt="" />
              </span>
              <h3>Python</h3>
            </div>
            <p>
              Automate your workflows with Python. <br />
              Write scripts to automate your tasks and workflows. <br />
              Run them at scheduled times or on specific events.
            </p>
            <a href="">
              Learn more <FaArrowAltCircleRight />
            </a>
          </div>
          <div className="tool-container">
            <div className="head">
              <span>
                <img src="" alt="" />
              </span>
              <h3>Webhooks</h3>
            </div>
            <p>
              Automate your workflows with Webhooks. <br />
              Configure webhooks to send and receive data. <br />
            </p>
            <a href="">
              Learn more <FaArrowAltCircleRight />
            </a>
          </div>
        </div>
      </section>
      <section className="auto-services">
        <h2>We will help you automate these workflows for your business</h2>
        <div className="service">
          <div className="auto-item">
            <h4>
              Emails <MdOutlineMailOutline id="icon" />
            </h4>
            <p>
              Automate sending emails to customers, partners, or team members.{" "}
              <br />
            </p>
          </div>
          <div className="auto-item">
            <h4>
              Alerts and Notifications <MdOutlineNotifications id="icon" />{" "}
            </h4>
            <p>
              Automate sending notifications to customers, partners, or team
              members.
            </p>
          </div>
          <div className="auto-item">
            <h4>
              Scheduled backups <MdOutlineBackup id="icon" />{" "}
            </h4>
            <p>Automate your backups to ensure your data is safe and secure.</p>
          </div>
          <div className="auto-item">
            <h4>
              Lead generation
              <MdOutlineGeneratingTokens id="icon" />{" "}
            </h4>
            <p>Automate lead generation to increase your sales and revenue.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automations;
