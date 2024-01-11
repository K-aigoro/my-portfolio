import React from 'react';
import './intro.css';
import img from '../../assets/removebg.png';
import { Link } from "react-scroll";

function Intro() {
    return (
        <section id='intro'>
            <div className="content">
                <span className="hello">Hello,</span>
                <span className="text">I am <span className="name"> Aigoro kazeem</span> <br /> Front-end Developer</span>
                <p className="para">I am a software Developer proficient in HTML, CSS, Bootstrap, and React.js, with a strong foundation in PHP and MySQL for back-end</p>
                <Link><button className="btn"><ion-icon name="bag"></ion-icon>Hire Me</button></Link>
            </div>
            <img src={img} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;
