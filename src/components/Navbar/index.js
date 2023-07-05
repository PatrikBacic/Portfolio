import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./index.scss";


export default function Navbar(){
    // const [isOpen, setIsOpen] = useState(false);

    // const handleToggle = () => {
    //     setIsOpen(!isOpen);
    // };

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    
    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <div className="nav-bar">
            <nav>
                
                <NavLink to="/" className="navTitle">
                    Patrik Bačić
                </NavLink>
                <div className="nav-links">
                    <NavLink to="/" exact="true" activeclassname="active">
                        Home
                    </NavLink>
                    <NavLink to="/about" exact="true" activeclassname="active" className="about-link">
                        About
                    </NavLink>
                    <NavLink to="/contact" exact="true" activeclassname="active" className="contact-link">
                        Contact
                    </NavLink>
                    <NavLink to="/projects" exact="true" activeclassname="active" className="projects-link">
                        Projects
                    </NavLink>
                </div>
                
                <ul className="ul-links">
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrik-bacic" className="linkedin-link">
                            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://github.com/PatrikBacic" className="github-link">
                            <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                        </a>
                    </li>
                </ul>

                {/* Burger icon */}
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>

                {/* <button className="navbar-toggle" onClick={handleToggle}>
                    <span className="navbar-icon"></span>
                </button>
                <ul className={`navbar-nav ${isOpen ? "navbar-nav-open" : ""}`}>
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/about">About</NavLink></li>  
                   <li><NavLink to="/contact">Contact</NavLink></li> 
                   <li><NavLink to="/projects">Projects</NavLink></li> 
                </ul> */}
            </nav>

            <div className={menu_class}>
                <ul className={`burger-links ${isMenuClicked ? "visible" : "hidden"}`}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>  
                    <li><NavLink to="/contact">Contact</NavLink></li> 
                    <li><NavLink to="/projects">Projects</NavLink></li> 
                </ul>
            </div>

        </div>
    )
}
