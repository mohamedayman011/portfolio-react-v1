import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const ContactData = [
    {
        id: 1,
        icon: <MdOutlineEmail />,
        title: "Email",
        info: "mohamed21ayman21@gmail.com",
        link: "mailto:mohamed21ayman21@gmail.com",
    },
    {
        id: 2,
        icon: <RiMessengerLine />,
        title: "Messenger",
        info: "RedaTech",
        link: "https://m.me/mohamed21ayman21",
    },
    {
        id: 3,
        icon: <BsWhatsapp />,
        title: "WhatsApp",
        info: "01146513766",
        link: "https://api.whatsapp.com/send?phone=201146513766",
    },
];

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_r6upkjn", "template_8al7jld", form.current, {
                publicKey: "XJXFnB5MpGdPGEzTs",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
        e.target.reset();
    };
    return (
        <section className="contact" id="contact">
            <div className="top-section">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
            </div>
            <div className="container contact-container">
                <div className="contact-options">
                    {ContactData.map(({ id, icon, title, info, link }) => (
                        <article key={id} className="contact-option">
                            {icon}
                            <h4>{title}</h4>
                            <h5>{info}</h5>
                            <a href={link} target="_blank">
                                Send Message
                            </a>
                        </article>
                    ))}
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    title="Portfolio Form">
                    <input
                        type="text"
                        name="fullName"
                        id="formFullName"
                        placeholder="Full Name"
                    />
                    <input
                        type="email"
                        name="email"
                        id="formEmail"
                        placeholder="Your Email"
                    />
                    <textarea
                        name="message"
                        id="formMessage"
                        rows="10"
                        placeholder="Enter Your Message"></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
