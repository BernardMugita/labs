import React from "react";
import "./Analysis.scss";
import { GrAnalytics } from "react-icons/gr";
import {
  FaArrowAltCircleRight,
  FaArrowCircleDown,
  FaChartArea,
  FaBalanceScale,
  FaUsers,
  FaIndustry,
  FaCog,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaUserCheck,
} from "react-icons/fa";
import {
  MdOnlinePrediction,
  MdOutlineSentimentVerySatisfied,
} from "react-icons/md";

type Props = {};

const Analysis = (props: Props) => {
  return (
    <div className="Analysis">
      <section className="top">
        <div className="left">{/* <img src={jenzilit} alt="" /> */}</div>
        <div className="right">
          <h1>
            Business Analysis <GrAnalytics />
          </h1>
          <p>
            We will help your organization make informed business decisions{" "}
            <br />
            using data analysis and visualization. We will use uncovered
            insights <br />
            to make recommendations for your business processes.
          </p>
          <button>
            Learn More <FaArrowCircleDown />
          </button>
        </div>
      </section>

      <section className="solutions">
        <div className="left">
          <h1>Take your Analysis to the Next Level</h1>
          <p>
            Unlock the full potential of your business by transforming raw data
            into actionable insights. <br /> <br />
            Our Business Analysis services are designed to help you make
            data-driven decisions, improve operations, <br />
            and drive growth across all departments.
            <br />
            <br />
            Whether you're launching a new product, improving customer
            experience, or planning for the future— <br />
            we’ll help you understand your data and use it wisely.
          </p>

          {/* Tools Section */}
          <div className="tools-section">
            <h2>Our Tools & Technologies</h2>
            <p>
              To deliver high-impact results, we leverage cutting-edge
              technologies and frameworks, including:
            </p>
            <ul>
              <li>
                <strong>Power BI & Tableau</strong> – for real-time dashboards
                and reports
              </li>
              <li>
                <strong>Python (Pandas, NumPy, scikit-learn)</strong> – for
                advanced data processing & machine learning
              </li>
              <li>
                <strong>SQL</strong> – for data extraction and transformation
              </li>
              <li>
                <strong>Google Data Studio</strong> – for lightweight web-based
                visualizations
              </li>
              <li>
                <strong>R</strong> – for statistical analysis and data modeling
              </li>
              <li>
                <strong>Excel + VBA</strong> – for quick insights and
                small-scale models
              </li>
              <li>
                <strong>Natural Language Processing (NLP)</strong> – for
                feedback and sentiment analysis
              </li>
            </ul>
            <p>
              These tools allow us to work efficiently with your existing data
              infrastructure while offering scalable, intelligent solutions.
            </p>
          </div>
          <section className="more">
            <h2>We'd like to hear from you</h2>
            <div className="form">
              <label htmlFor="">
                <p>Email Address:</p>
                <input type="text" placeholder="Enter your email address" />
              </label>
              <label htmlFor="">
                <p id="mes-label">Message:</p>
                <textarea placeholder="What are your business analysis needs?" />
              </label>
              <button>Submit . . .</button>
            </div>
          </section>
        </div>
        <div className="right">
          {/* Data Visualization */}
          <div className="integration-container">
            <div className="head">
              <span>
                <FaChartArea id="auto-icon" />
              </span>
              <h3>Data Visualization & Analysis</h3>
            </div>
            <p>
              We help you make sense of your raw data with intuitive visuals and
              insights that support confident decision making.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>

          {/* Sentiment Analysis */}
          <div className="integration-container">
            <div className="head">
              <span>
                <MdOutlineSentimentVerySatisfied id="auto-icon" />
              </span>
              <h3>Sentiment Analysis</h3>
            </div>
            <p>
              Analyze event or survey feedback and convert it into actionable
              insights to improve future experiences.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>

          {/* Churn Analysis */}
          <div className="integration-container">
            <div className="head">
              <span>
                <FaUserCheck id="auto-icon" />
              </span>
              <h3>Churn Rate Analysis</h3>
            </div>
            <p>
              Understand why customers leave your platform and develop
              strategies to retain them through data-driven churn insights.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>

          {/* Predictive Analysis */}
          <div className="integration-container">
            <div className="head">
              <span>
                <MdOnlinePrediction id="auto-icon" />
              </span>
              <h3>Predictive Analysis</h3>
            </div>
            <p>
              We use data trends to predict future outcomes, enabling you to
              prepare and plan more effectively.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>

          {/* Customer Segmentation */}
          <div className="integration-container">
            <div className="head">
              <span>
                <FaUsers id="auto-icon" />
              </span>
              <h3>Customer Segmentation</h3>
            </div>
            <p>
              Group your customers based on behavior, value, and demographics to
              personalize marketing and improve service delivery.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>

          {/* Descriptive & Diagnostic Analytics */}
          <div className="integration-container">
            <div className="head">
              <span>
                <FaBalanceScale id="auto-icon" />
              </span>
              <h3>Descriptive & Diagnostic Analytics</h3>
            </div>
            <p>
              Understand what happened and why it happened in your business
              using historical and cause-effect analysis.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>

          {/* Market & Competitor Analysis */}
          <div className="integration-container">
            <div className="head">
              <span>
                <FaIndustry id="auto-icon" />
              </span>
              <h3>Market & Competitor Analysis</h3>
            </div>
            <p>
              Stay competitive by tracking market trends and analyzing
              competitor strategies to uncover new growth opportunities.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>

          {/* Operational Efficiency */}
          <div className="integration-container">
            <div className="head">
              <span>
                <FaCog id="auto-icon" />
              </span>
              <h3>Operational Efficiency</h3>
            </div>
            <p>
              Identify bottlenecks in your workflows and optimize processes to
              enhance productivity and reduce costs.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>

          {/* Financial Forecasting */}
          <div className="integration-container">
            <div className="head">
              <span>
                <FaMoneyCheckAlt id="auto-icon" />
              </span>
              <h3>Financial Forecasting</h3>
            </div>
            <p>
              Build financial models and forecast revenue, expenses, and
              investments to support long-term planning.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>

          {/* Risk & Compliance Analysis */}
          <div className="integration-container">
            <div className="head">
              <span>
                <FaShieldAlt id="auto-icon" />
              </span>
              <h3>Risk & Compliance Analysis</h3>
            </div>
            <p>
              Proactively identify potential risks and ensure compliance with
              industry regulations using analytical audits.
            </p>
            <button>
              Learn more <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analysis;
