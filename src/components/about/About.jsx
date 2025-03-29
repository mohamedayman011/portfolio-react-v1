import React from "react";
import "./about.css";
import ImageAbout from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
export default function About() {
    return (
        <section id="about" className="about">
            <div className="top-section">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
            </div>
            <div className="container about-container">
                <div className="about-me">
                    <div className="img-about">
                        <img src={ImageAbout} alt="Img About" loading="laze" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-carts">
                        <div className="cart">
                            <FaAward className="about-icon" />
                            <h5>Experience</h5>
                            <small>1+ years working</small>
                        </div>
                        <div className="cart">
                            <FiUser className="about-icon" />
                            <h5>Clients</h5>
                            <small>20+ worldwide</small>
                        </div>
                        <div className="cart">
                            <VscFolderLibrary className="about-icon" />
                            <h5>Projects</h5>
                            <small>10+ completed</small>
                        </div>
                    </div>
                    <p>
                        I am a creative Front-End Developer specializing in
                        crafting the visual elements of websites and
                        applications that users directly interact with. I
                        possess extensive experience in responsive design,I work
                        closely with UX/UI design teams to ensure an optimal
                        user experience,, I also have strong skills in version
                        control systems such as Git. Through my projects, I
                        consistently strive to enhance user engagement and
                        deliver positive outcomes that significantly contribute
                        to business growth and customer satisfaction.
                    </p>
                    <a
                        href="#contact"
                        title="let's talk"
                        className="btn btn-primary">
                        let's talk
                    </a>
                </div>
            </div>
        </section>
    );
}
