import React from "react"
import { Link } from "react-router-dom"
import "./index.scss"
import cSharpIcon from "../icons/c-sharp-icon.png"
import sqlIcon from "../icons/sql-icon.png"
import scssIcon from "../icons/scss.png"
import cIcon from "../icons/Clang.png"
import htmlIcon from "../icons/html-icon.png"
import cssIcon from "../icons/css-icon.webp"
import pythonIcon from "../icons/python-programming-language-icon.png"
import jsIcon from "../icons/javascript-programming-language-icon.webp"
import javaIcon from "../icons/java-programming-language-icon.webp"
import reactIcon from "../icons/react-js-icon.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Home(){
    return(
        <div className="main-container">
            <div className="text-zone">
                <h1>Hi, my name is <span className="name">Patrik,</span>
                    <br />
                    I am a junior software developer<br /><br />
                    <Link to="/contact" className="contactMe">Contact me <FontAwesomeIcon icon={ faEnvelope } /></Link>
                    <br /><br />
                    <span className="skills">My skills:</span>
                </h1>
                
                <div className="icons-container1">
                    <img src={htmlIcon} alt="HTML" />
                    <img src={cssIcon} alt="CSS" />
                    <img src={jsIcon} alt="JAVASCRIPT" />
                    <img src={reactIcon} alt="REACT" />
                    <img src={cIcon} alt ="C" />
                </div>
                
                <div className="icons-container2">
                    <img src={cSharpIcon} alt="CSHARP" />
                    <img src={pythonIcon} alt="PYTHON" />
                    <img src={javaIcon} alt="JAVA" />
                    <img src={sqlIcon} alt="SQL" />
                    <img src={scssIcon} alt="SCSS" />
                </div>
            </div>
        </div>
    )
}