import React from "react";
import "./services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

export default function Services() {
    return (
        <section id="services" className="services">
            <div className="top-section">
                <h5>What I Offer</h5>
                <h2>Services</h2>
            </div>
            <div className="container services-container">
                <article className="cart-services">
                    <MdDesignServices className="icon" />
                    <h3>Web Service</h3>
                    <p className="text-light">
                        Delivering reliable and efficient web services tailored
                        to your needs
                    </p>
                </article>
                <article className="cart-services">
                    <IoIosRocket className="icon" />
                    <h3>Fast Performance</h3>
                    <p className="text-light">
                        Optimized for speed to ensure a seamless user experience
                    </p>
                </article>
                <article className="cart-services">
                    <FaCode className="icon" />
                    <h3>Clean Code</h3>
                    <p className="text-light">
                        Writing clean, maintainable, and well-structured code
                        for better performance
                    </p>
                </article>
            </div>
        </section>
    );
}
