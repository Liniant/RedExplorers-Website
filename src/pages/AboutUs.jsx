import "./main.css"
import Navigation from "../components/navigation/Navigation";
import Button from "../components/button/Button";
import React from "react";
import { useState } from "react"
import Contact from "../components/contact/Contact";

export default function AboutUs(){
 const[show,setShow] = useState(false)
    return(
        <>
            <div className="about-us">
                <div className="shero">
                    <Navigation/>
                    <div className="shero-text">About Us</div>
                </div>

                <div className="about-cont">
                    <div className="ano-bio">
                        <div className="ano-side">
                            <img src="assets/ano.jpeg" className="ano" alt="Missing"/>
                        </div>

                        <div className="text-side">
                            <div className="main-text">Anotida Tauya</div>
                            <div className="a-text">
                                Anotida is a computer science student at the African Leadership University who has a passion for technology and cybersecurity. With her experience and skills, she is the creator of Colingo, a platform for comparing the cost of living in different countries. Through this platform, Anotida aims to provide users with an easy and affordable way to make informed decisions about their finances and living expenses when considering moving to a different country.

                                As a young entrepreneur and advocate for digital safety, Anotida is determined to make a difference in the world through technology. She is a true inspiration to anyone who wants to pursue their passions and create positive change in the world.
                            </div>
                            <div className="btnn" onClick={ ()=>{ setShow(true) }}>
                                <Button text="Lets Chat" />
                            </div>



                        </div>
                    </div>
                </div>
                 { show &&  <Contact/>  }





            </div>
        </>
    )
}