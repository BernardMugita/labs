import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { MdArrowDropDown } from "react-icons/md";
import navLogo from "../../Resources/logo.png";

type Props = {};

const Navbar = (props: Props) => {
  const [showSubMenus, setShowSubMenus] = useState<boolean>(false);
  const [showSubMenusRight, setShowSubMenusRight] = useState<boolean>(false);
  const disabled = true; 

  return (
    <div className="Navbar">
      <div className="top_bar">
        <div className="id">
        <img src={navLogo} alt="nav_logo" id="nav_logo"/>
        <h4>JENZI</h4>
        </div>
        <div className="site_actions">
          <span className="contact">
            <h4>Reach out to us</h4>
            <p id="number">info@jenzilabs.com</p>
          </span>
        </div>
      </div>
      <div className="bottom_bar">
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <div className="about" onMouseLeave={() => setShowSubMenus(false)}>
            <NavLink  onMouseEnter={() => setShowSubMenus(true)} to="/about" >
              About <MdArrowDropDown />
            </NavLink>
            {showSubMenus && (
              <div className="sub_menus">
                <NavLink to="/about/about_us">About Us</NavLink>
                <NavLink to="/about/our_team">Our Team</NavLink>
              </div>
            )}
          </div>
          <div
            className="services"
            onMouseLeave={() => setShowSubMenusRight(false)}
          >
            <NavLink
              aria-disabled={disabled}
              onMouseEnter={() => setShowSubMenusRight(true)}
              to="/services"
            >
              Services <MdArrowDropDown />
            </NavLink>
            {showSubMenusRight && (
              <div className="sub_menus right">
                <NavLink to="/services/mobile_apps">Mobile Apps</NavLink>
                <NavLink to="/services/web_development">Web Development</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact_us">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
