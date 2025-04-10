import "./MobileApps.scss";
import utakula from "../../Resources/utakula.png";
import finalyzeMobile2 from "../../Resources/finalyze_mobile_2.0.jpg";
import stroke from "../../Resources/bg-stroke.png";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import jenzilit from "../../Resources/jenzi-logo-lit-mass.png";
import { MdSmartphone } from "react-icons/md";

type Props = {};

const MobileApps = (props: Props) => {
  return (
    <div className="MobileApps">
      <div className="mobile-intro">
        <div className="left">{/* <img src={jenzilit} alt="" /> */}</div>
        <div className="mobile-text">
          <h1>
            Jenzi Apps <MdSmartphone />
          </h1>
          <p>
            We build custom mobile apps for Android and iOS platforms
            prioritizing user experience and performance leveraging the latest
            technologies to build scalable and secure apps to serve our client's
            needs.
          </p>
        </div>
      </div>
      <div className="budget">
        <h2>Tell Us about your App</h2>
        <label htmlFor="">
          Email Address:
          <input type="text" placeholder="Enter your email address" />
        </label>
        <label htmlFor="">
          Type of App:
          <input type="text" placeholder="ECommerce, Guides, etc" />
        </label>
        <label htmlFor="">
          Budget:
          <input type="text" placeholder="Your budget" />
        </label>
        <button>Get Started . . .</button>
      </div>
      <div className="portfolio">
        <h2>Some of our products</h2>
        <div className="portfolio-container">
          <div className="row-one-add">
            <div className="left">
              <div className="stroke">
                <img src={finalyzeMobile2} alt="" />
              </div>
              <div className="screen-text">
                <img src={stroke} alt="" />
                <div className="text">
                  <h3>Finalyze Mobile 2.0</h3>
                  <span>
                    Development status: <p>Deployed</p>
                  </span>
                  <span>
                    Description:{" "}
                    <p>
                      Mobile budgeting app to help with your financial needs.
                    </p>
                  </span>
                  <Link
                    to="/services/mobile_apps/finalyze_2.0"
                    className="view-more"
                  >
                    <FaArrowCircleRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row-one-add">
            <div className="left">
              <div className="stroke">
                <img src={utakula} alt="" />
              </div>
              <div className="screen-text">
                <img src={stroke} alt="" />
                <div className="text">
                  <h3>Utakula!? Meal Planner</h3>
                  <span>
                    Development status: <p>Deployed</p>
                  </span>
                  <span>
                    Description:{" "}
                    <p>
                      A meal planning app to help you plan your meals and watch
                      your diet.
                    </p>
                  </span>
                  <Link
                    to="/services/mobile_apps/finalyze_2.0"
                    className="view-more"
                  >
                    <FaArrowCircleRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-meta">
        <p></p>
      </div>
    </div>
  );
};

export default MobileApps;
