import React from "react";
import "../Footer/style.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="footer_nav d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
            <ul className="footer_nav">
              <li>Blog</li>
              <li>FAQs</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaSkype />
              </li>
              <li>
                <FaPinterest />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
