import "./Automations.scss";
import { GiAutomaticSas, GiPuzzle } from "react-icons/gi";
import {
  FaArrowAltCircleRight,
  FaArrowCircleDown,
  FaPython,
} from "react-icons/fa";
import ProcessItem from "../../Components/ProcessItem/ProcessItem";
import {
  MdOutlineBackup,
  MdOutlineGeneratingTokens,
  MdOutlineMailOutline,
  MdOutlineNotifications,
  MdWebhook,
} from "react-icons/md";
import { TbSettingsAutomation, TbSquareLetterP } from "react-icons/tb";
import { PiToolboxFill } from "react-icons/pi";
import { GrSchedulePlay } from "react-icons/gr";

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
                <TbSquareLetterP id="auto-icon" />
              </span>
              <h3>Pipedream</h3>
            </div>
            <p>
              Automate your workflows with Pipedream. <br />
              Connect your apps and automate your tasks.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="tool-container">
            <div className="head">
              <span>
                <FaPython id="auto-icon" />
              </span>
              <h3>Python</h3>
            </div>
            <p>
              Automate your workflows with Python. <br />
              Write scripts to automate your tasks and workflows. <br />
              Run them at scheduled times or on specific events.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="tool-container">
            <div className="head">
              <span>
                <MdWebhook id="auto-icon" />
              </span>
              <h3>Webhooks</h3>
            </div>
            <p>
              Automate your workflows with Webhooks. <br />
              Configure webhooks to send and receive data. <br />
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
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
      <section className="process">
        <h2>Automation Channel</h2>
        {/* <div className="divider"></div> */}
        <div className="process-body">
          <ProcessItem
            process_class_name="needs"
            process_icon={<GiPuzzle id="icon" />}
            process_name="Step 1: Define Information needs"
            process_description="
              Your information needs are the foundation of your automation
              strategy. Identify the data you need to collect, process, and
              analyze.

              These will help us determine the best automation tools and
              workflows for your business.
            "
          />
          <ProcessItem
            process_class_name="tooling"
            process_icon={<PiToolboxFill id="icon" />}
            process_name="Step 2: Tooling/Selecting Appropirate Tools"
            process_description="
              After identifying your information needs, we will select the
              appropriate tools and software to automate your workflows.

              The right tools will help streamline your processes, reduce
              manual labor, and increase productivity.
            "
          />
          <ProcessItem
            process_class_name="automation"
            process_icon={<TbSettingsAutomation id="icon" />}
            process_name="Step 3: Automate Processes"
            process_description="
              We will use the information needs and selected tools to automate
              your processes.
            "
          />
          <ProcessItem
            process_class_name="cron"
            process_icon={<GrSchedulePlay id="icon" />}
            process_name="Step 4: Schedule Cron Jobs"
            process_description="
              The final step is to schedule cron jobs to run your automated
              workflows at the desired frequency. This will ensure that your
              processes run smoothly and efficiently.

              We propose to use Pipedream as our cron job scheduler. Pipedream
              is a powerful and flexible platform that allows us to create
              custom workflows and automate complex tasks.
            "
          />
        </div>
      </section>
    </div>
  );
};

export default Automations;
