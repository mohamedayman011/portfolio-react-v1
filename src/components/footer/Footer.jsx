import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ImgFooter from "../../assets/logo-footer.png";
export default function Footer() {
    return (
        <footer>
            <div className="logo">
                <div className="logo-img">
                    <img src={ImgFooter} alt="logo-footer" />
                </div>
                <a href="#">
                    Mohamed
                </a>
            </div>
            <ul className="links">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer-social">
                <a
                    href="http://www.linkedin.com/in/mohamed21ayman21"
                    target="_blank"
                    title="Linkedin:Mohamed Ayman">
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/mohamedayman011"
                    target="_blank"
                    title="Github: mohamedayman011">
                    <FaGithub />
                </a>
                <a
                    href="http://wa.me/201146513766"
                    target="_blank"
                    title="WhatsApp">
                    <FaWhatsapp />
                </a>
            </div>
        </footer>
    );
}
