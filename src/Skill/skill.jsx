import React from "react";
import "./skill.css";
// import git from '../../assets/png-transparent-git.png';
import web from '../../assets/web.png';
// import img from './assets/removebg.png';



function Skill() {
    return (
        <section id="skill">
            <h1 className="title">About me</h1>
            <br />
            <p className="desc">
                I am a skilled Front-end developer with experience in HTML, CSS and
                JAVASCRIPT but major in React.js also have Knowlegde in PHP and MySQL
                for backend. I also hold a Bachelor's Degree in Computer Science.
                <br />
                A creative and ambitious problem solver, I thrive on learning opportunities and am passionate about crafting innovative solutions.
            </p>
            <div className="skill1">
                <div className="front">
                    <h1>Front-end Technologies</h1>
                    <ul>
                        <li><ion-icon name="logo-html5"></ion-icon></li>
                        <li><ion-icon name="logo-css3"></ion-icon></li>
                        <li><ion-icon name="logo-javascript"></ion-icon></li>
                    </ul>
                </div>
                <div className="back">
                <h1>Back-end Technologies</h1>
                <ul>

                    <li><ion-icon name="logo-python"></ion-icon></li>

                </ul>
                </div>
            </div>
        </section>
    );
}

export default Skill;
