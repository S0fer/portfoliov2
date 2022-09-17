import React from "react"
import photo from "../images/frame.jpeg"
export default function About(){
    return(
        <div className="about">
            <img src={photo} alt="" className="main-photo" />
            <div className="right">
                <h1>Sobre Mim</h1>
                <p>Meu nome é João Pedro, e atualmente trabalho como analista de testes QA, porém busco oportunidade na área de desenvolvimento Front End.</p>
                <div className="cv">
                    <div className="left-cv">
                        <p>Nome</p>
                        <p>Telefone</p>
                        <p>Experiência</p>
                        <p>Linkedin</p>
                    </div>
                    <div className="right-cv">
                        <p>Nome</p>
                        <p>Telefone</p>
                        <p>Experiência</p>
                        <p>Linkedin</p>
                    </div>
                </div>
                <button className="btn">
                    Call to Action
                </button>
            </div>
        </div>
)}