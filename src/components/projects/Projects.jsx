import React from "react";
import "./projects.css";
// import IMG1 from "../../assets/portfolio1.jpg";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/portfolio3.webp";
import IMG4 from "../../assets/portfolio4.webp";
import IMG5 from "../../assets/portfolio5.webp";
import IMG6 from "../../assets/portfolio6.png";

const portfolioData = [
    {
        image: IMG1,
        title: "Portfolio Template 2",
        github: "https://github.com/mohamedayman011/portfolio-template-2",
        demo: "https://mohamedayman011.github.io/portfolio-template-2/",
    },
    {
        image: IMG2,
        title: "Bag store",
        github: "https://github.com/mohamedayman011/Final-Project-ITI",
        demo: "https://mohamedayman011.github.io/Final-Project-ITI/",
    },
    {
        image: IMG3,
        title: "Chef Michael Bolano",
        github: "https://github.com/mohamedayman011/Chef-Michael-Bolano",
        demo: "https://mohamedayman011.github.io/Chef-Michael-Bolano/",
    },
    {
        image: IMG4,
        title: "Portfolio Template 1",
        github: "https://github.com/mohamedayman011/Portfolio-Version-One",
        demo: "https://mohamedayman011.github.io/Portfolio-Version-One/",
    },
    {
        image: IMG5,
        title: "Watch store",
        github: "https://github.com/mohamedayman011/NTI-PROJECT",
        demo: "https://mohamedayman011.github.io/NTI-PROJECT/",
    },
    {
        image: IMG6,
        title: "Portfolio Template 3",
        github: "https://github.com/mohamedayman011/kasper-Template-Html-Css",
        demo: "https://mohamedayman011.github.io/kasper-Template-Html-Css/",
    },
];

export default function Projects() {
    return (
        <section className="projects" id="portfolio">
            <div className="top-section">
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
            </div>
            <div className="container projects-container">
                {portfolioData.map(({ image, title, github, demo }, i) => (
                    <article className="portfolio-item" key={i}>
                        <div className="portfolio-item-img">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="project-item-btns">
                            <a
                                href={github}
                                className="btn"
                                target="_blank"
                                title="link github">
                                Github
                            </a>
                            <a
                                href={demo}
                                className="btn btn-primary"
                                target="_blank"
                                title="link live demo">
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
