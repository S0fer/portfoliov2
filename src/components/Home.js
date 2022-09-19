import React from "react"
import photo from "../images/circular.jpg"
import arrow from "../images/arrow.svg"
export default function Home(){
    return(
        <div className="home">
            <div className="filter">
                <img src={photo} alt="circular" className="circular-photo" />
                <div>
                    <h1>João Alarcón</h1>
                    <p>Front End Developer</p>
                </div>
                <div className="floating-arrow">
                    <img src={arrow} alt="arrow" className="floating-arrow-svg" />
                </div>
            </div>
        </div>
)}