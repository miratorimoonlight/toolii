import React from 'react'
import '../styles/aboutme/aboutme.css'
import aboutMeImage from '../img/aboutme.jpg'


export default function AboutMe() {
    return (
        <div className="row">
            <div id="img-container">
                <img id="aboutme-img" src={aboutMeImage} alt="icon of about me" />
            </div>
            <div id="aboutme-container">
                <h1 className="blue-text">About Me</h1>
                <div id="aboutme-info">
                    <h6>- Full Name: Kim Miratorimoonlight</h6>
                    <h6>- Nickname: Mikroman</h6>
                    <h6>- Toolii created in September 2020</h6>
                </div>

            </div>
        </div>
    )
}
