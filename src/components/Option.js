import React from "react"
export default function Option(props){
    
    const icon = props.array.icon;
    const name = props.array.name;
    const description = props.array.description;
    const dark = props.array.dark;

    return(
        <div className={name + " option"}>
            <div className="icon">  
                <img src={icon} alt="" className={dark ? "option-img-fix" : "option-img"}></img>
            </div>
            <div className="label">
                <div className="main">{name}</div>
                <div className="sub">{description}</div>
            </div>
        </div>
    
)}