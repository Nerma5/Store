import React from "react";
import { FaGithub, FaJs, FaLinkedin, FaSlack } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main">
      <div className="textAbove">
        <p>You can visit our profiles for more products</p>
      </div>
      <div className="icons">
        <FaGithub />
        <FaJs />
        <FaLinkedin />
        <FaSlack />
      </div>
    </div>
  );
};

export default Footer;
