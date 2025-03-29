import React from "react";
import { useState } from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

export default function Nav() {
    const [active, setActive] = useState('#')
    return (
        <nav>
            <a href="#" className={active === '#'? 'active' : ''} onClick={() => setActive('#')}>
                <IoHomeOutline />
            </a>
            <a href="#about" className={active === '#about'? 'active' : ''} onClick={() => setActive('#about')}>
                <LuUserRound />
            </a>
            <a href="#services" className={active === '#services'? 'active' : ''}onClick={() => setActive('#services')}>
                <BiBook />
            </a>
            <a href="#portfolio" className={active === '#portfolio'? 'active' : ''}onClick={() => setActive('#portfolio')}>
                <RiServiceLine />
            </a>
            <a href="#contact" className={active === '#contact'? 'active' : ''}onClick={() => setActive('#contact')}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
}
