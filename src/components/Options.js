import React from "react"
import Option from "./Option"
import data from "./data.js"
export default function Options(){
    const options = data.map((item, index) => {
        return (
            <Option
                key={index}
                array={item}
            />
        )
    })
    return(
        <div className="options">
            <h1>Skills</h1>
            <div className="carousel">
                {options}
            </div>
        </div>
)}