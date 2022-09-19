import React from "react"
import photo from "../images/frame.jpeg"
export default function About(){
    return(
        <div className="about">
            <img src={photo} alt="" className="main-photo" />
            <div className="right">
                <h1>Sobre Mim</h1>
                <p>Meu nome é João Pedro, sou um desenvolvedor Front End de Porto Alegre - RS atualmente trabalhando como Analista de Testes QA. Curso Sistemas de Informação pela FADERGS e tenho experiência de estudo na área de Front End desde 2015, quando finalizei um curso profissionalizante em Web Design. Experiência e estudo são os principais motivos para minha aplicação nesta área.</p>
                <div className="cv">
                    <div className="left-cv">
                        <p>Nome: João Pedro Alarcón Duarte</p>
                        <p>Telefone: (51) 994148603</p>
                    </div>
                    <div className="right-cv">
                        <p>Github: <a href="https://www.github.com/S0fer/" target="_blank" rel="noopener noreferrer">github.com/S0fer</a></p>
                        <p>Linkedin: <a href="https://www.linkedin.com/in/alarcon-developer/" target="_blank" rel="noopener noreferrer">linkedin.com/in/alarcon-developer</a></p>
                    </div>
                </div>
                <button className="btn">
                    Call to Action
                </button>
            </div>
        </div>
)}