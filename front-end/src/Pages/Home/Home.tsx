import "./Home.scss";
import BlobWidget from "../../Components/Blob widget/BlobWidget";
import screen from "../../Resources/screen.jpeg";
import {
  RiCss3Fill,
  RiFlutterFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
} from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { GrAndroid, GrNode } from "react-icons/gr";
import {
  SiDjango,
  SiIos,
  SiMongodb,
  SiMysql,
  SiPython,
  SiSass,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import webimage from "../../Resources/web_image.png";
import phoneweb from "../../Resources/phone_web.jpeg";
// import TestimonialWidget from "../../Components/Testimonial widget/TestimonialWidget";
// import TestimonialsContainer from "../../Components/TestimonialsContainer/TestimonialsContainer";
import finalyze from "../../Resources/finalL.png";
import arifu from "../../Resources/arifu.png";
import { Link } from "react-router-dom";
import { MdDashboardCustomize, MdSupport } from "react-icons/md";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="Home">
      <div className="banner">
        <div className="interior-banner">
          <div className="left">
            <BlobWidget />
            <div className="banner_text">
              <h1>JENZI LABS</h1>
              <p>Enhance your efficiency with technology</p>
              <Link to="/services/mobile_apps">Get Started</Link>
            </div>
          </div>
          <div className="right">
            <div className="banner-item">
              <h4>Business Support</h4>
              <MdSupport id="banner-icon" />
            </div>
            <div className="banner-item">
              <h4>Custom Solutions</h4>
              <MdDashboardCustomize id="banner-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile_design">
        <div className="mobile-interior">
          <div className="left">
            <h1>Custom Modern Mobile Solutions</h1>
            <p>
              We build custom mobile apps for Android and iOS platforms
              prioritizing user experience and performance. We leverage the
              latest technologies to build scalable and secure apps to serve our
              client's needs.
            </p>
            <br />
            <br />
            <div className="meta">
              <div className="packages">
                <h4>Packages used</h4>
                <div className="package">
                  <TbBrandReactNative id="native" /> <p>React Native</p>
                </div>
                <div className="package">
                  <RiFlutterFill id="flutter" /> <p>Flutter</p>
                </div>
              </div>
              <div className="platforms">
                <h4>Platforms</h4>
                <div className="platform">
                  <GrAndroid id="android" /> <p>Android</p>
                </div>
                <div className="platform">
                  <SiIos id="ios" /> <p>iOS</p>
                </div>
              </div>
            </div>
            {/* <button>More . . .</button> */}
          </div>
          <div className="outlier-two"></div>
          <div className="outlier-one"></div>
          <div className="right">
            <img src={screen} alt="mobile_design" />
          </div>
        </div>
      </div>
      <div className="websites">
        <div className="top">
          <h1>Websites</h1>
          <img id="web" src={webimage} alt="web_image" />
          <img src={phoneweb} alt="" />
        </div>
        <div className="bottom">
          <p>
            We build custom responsive websites for our clients using the latest
            technologies to create fast, secure, and scalable websites. We
            prioritize user experience and performance while ensuring that we
            meet our client's needs.
          </p>
          <h4>Tech Stacks Used</h4>
          <div className="types">
            <div className="complex">
              <ul>
                <li>
                  <SiWordpress id="icon" /> WordPress
                </li>
              </ul>
            </div>
            <div className="complex">
              <ul>
                <li>
                  <RiHtml5Fill id="icon" /> HTML
                </li>
                <li>
                  <RiCss3Fill id="icon" /> CSS
                </li>
                <li>
                  <RiJavascriptFill id="icon" /> JavaScript
                </li>
              </ul>
            </div>
            <div className="complex">
              <ul>
                <li>
                  <RiReactjsFill id="icon" /> React
                </li>
                <li>
                  <SiSass id="icon" /> Sass
                </li>
                <li>
                  <SiTypescript id="icon" /> TypeScript
                </li>
                <li>
                  <GrNode id="icon" /> Node
                </li>
                <li>
                  <SiMongodb id="icon" /> MongoDB
                </li>
              </ul>
            </div>
            <div className="complex">
              <ul>
                <li>
                  <SiPython id="icon" /> Python
                </li>
                <li>
                  <SiDjango id="icon" />
                  Django
                </li>
                <li>
                  <SiMysql id="icon" /> MySQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="testimonials">
        <TestimonialWidget />
        <div className="testimonials_text">
          <h1>What Do they Say About Us</h1>
        </div>
        <div className="testimonials_container">
          <TestimonialsContainer />
          <TestimonialsContainer />
        </div>
      </div> */}
      <div className="our_clients">
        <h1>Jenzi Products</h1>
        <p>
          We are a team of passionate developers who are dedicated to creating
          high-quality products that meet the needs of our clients. Our team
          consists of experienced developers who have a deep understanding of
          the latest technologies and trends.
        </p>
        <div className="section_body">
          <div className="trust-body">
            <img src={finalyze} alt="" />
            {/* <h4>Finalye</h4> */}
          </div>
          <div className="trust-body">
            <img src={arifu} alt="" />
            {/* <h4>Arifu Library</h4> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
