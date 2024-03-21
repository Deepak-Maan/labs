import React from "react";
import footerlogo from "../assets/images/svg/page-logo.svg";
import { Facebook, Instagram, Linkedin, Twitter } from "./Icons";

const Footer = () => {
    return (
        <div className="pt-sm-5 mt-sm-5 overflow-hidden position-relative">
            <div className="footer-ellipse1 d-none d-lg-flex"></div>
            <div className="footer-ellipse2 d-none d-lg-flex"></div>
            <div className=" container pt-sm-5 mt-5">
                <div className="text-center pb-3">
                    <a href=""><img src={footerlogo} alt="footerlogo" /></a>
                </div>
                <ul className=" d-flex gap-4 justify-content-center m-0 ps-0">
                    <li><a href="#home" className=" fw-normal pagelinks fs-sm text-gray"> Home </a></li>
                    <li><a href="#roadmap" className=" fw-normal pagelinks fs-sm text-gray"> Roadmap </a></li>
                    <li><a href="#team" className=" fw-normal pagelinks fs-sm text-gray"> Team </a></li>
                    <li><a href="#about" className=" fw-normal pagelinks fs-sm text-gray"> About Us</a></li>
                </ul>
                <div className=" d-flex justify-content-center gap-3 pt-4 ">
                    <div className="social-icons"><a target="_blank" rel="noreferrer" href="https://twitter.com/?lang=en"><Twitter /></a></div>
                    <div className="social-icons"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><Facebook /></a></div>
                    <div className="social-icons"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><Instagram /></a></div>
                    <div className="social-icons"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><Linkedin /></a></div>
                </div>
            </div>
            <div className=" overflow-hidden ">
                <hr className="footer-line" />
                <p className="fw-normal fs-xs text-gray text-center">© 2024 248 Labs. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;