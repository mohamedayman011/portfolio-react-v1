import React from "react";
import "./home.css";
import Me from "../../assets/me.png";
import Cv from '../../assets/cv.pdf'
import HomeSocial from "./HomeSocial";

export default function Home() {
    return (
        <div className="home">
            <div className="container home-container">
                <h4>Hello i'm</h4>
                <h1>Mohamed Ayman</h1>
                <h4 className="text-light">FrontEnd Developer</h4>
                <div className="btns">
                    <a href={Cv} className="btn" download>
                        Download CV
                    </a>
                    <a href="#contact" className="btn btn-primary">
                        let's talk
                    </a>
                </div>
                <div className="img-me">
                    <img src={Me} alt="img-me" loading="laze" />
                </div>
                <a href="#about" className="scroll-down">Scroll Down</a>
                <HomeSocial />
            </div>
        </div>
    );
}
