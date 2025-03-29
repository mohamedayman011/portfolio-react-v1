import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function HomeSocial() {
    return <div className="home-social">
        <a href="http://www.linkedin.com/in/mohamed21ayman21" target="_blank" title='Linkedin:Mohamed Ayman'><FaLinkedin /></a>
        <a href="https://github.com/mohamedayman011" target="_blank" title='Github: mohamedayman011'><FaGithub /></a>
        <a href="http://wa.me/201146513766" target="_blank" title='WhatsApp'><FaWhatsapp /></a>
        <span></span>
    </div>;
}

export default HomeSocial;
