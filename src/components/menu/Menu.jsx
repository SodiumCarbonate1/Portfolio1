import "./menu.scss";

import React from 'react';

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li>
                <a href="#Intro">Home</a>
            </li>
            <li>
                <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#Works">Works</a>
            </li>
            <li>
                <a href="#Testimonials">Testimonials</a>
            </li>
            <li>
                <a href="#Contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
