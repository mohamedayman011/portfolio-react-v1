import React from "react";
import "./skills.css";
import Css from "../../assets/css3.svg";
import Javascript from "../../assets/javascript.svg";
import Figma from "../../assets/figma.svg";
import Nodejs from "../../assets/nodejs.svg";
import Typescript from '../../assets/typescript.svg'
import Html from "../../assets/html-5.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import ReactJS from "../../assets/react.svg";
const SkillsData = [
    {
        image: Css,
        title: "CSS",
        disc: "User Interface",
    },
    {
        image: Html,
        title: "Html",
        disc: "Basic Building",
    },
    {
        image: Javascript,
        title: "JavaScript",
        disc: "Interaction",
    },
    {
        image: Typescript,
        title: "Typescript",
        disc: "Interaction",
    },
    {
        image: ReactJS,
        title: "React",
        disc: "Framework",
    },
    {
        image: Bootstrap,
        title: "BootstrapCSS",
        disc: "User Interface",
    },
    {
        image: Nodejs,
        title: "NodeJS",
        disc: "Web Server",
    },
    {
        image: Figma,
        title: "Figma",
        disc: "Design tool",
    },
];
export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="top-section">
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>
            </div>
            <div className="container skills-container">
                {SkillsData.map(({title, image, disc},i) => (
                    <article className="card-skill" key={i}>
                        <div className="icon">
                            <img src={image} alt={title} loading="laze" />
                        </div>
                        <div className="content">
                            <h4>{title}</h4>
                            <p>{disc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
