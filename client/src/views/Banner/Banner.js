import React, { useState, useEffect } from "react";
import axios from "axios";
import './Banner.css';
import './BannerResponsive.css';
import Logo from "../../images/logo.png"
import {Button} from "../../components"
const Banner = () => {

    window.addEventListener('scroll', function() { 
        const linkBorder = document.getElementById("nav-link").style
        if (window.scrollY >= 0 && window.scrollY <200) {
            linkBorder.left = "23.4vw";
            linkBorder.width = "7.863vw"
        }

        if (window.scrollY > 400 && window.scrollY < 1100) {
            linkBorder.left = "33vw";
            linkBorder.width = "10.85vw"
          
        }

        if (window.scrollY > 1200 && window.scrollY < 1700) {
            linkBorder.left = "45.8vw";
            linkBorder.width = "13.7vw"
        }

        if (window.scrollY > 2000 && window.scrollY < 2600) {
            linkBorder.left = "61.5vw";
            linkBorder.width = "10.9vw"
        }

        if (window.scrollY > 2750 && window.scrollY < 3400) {
            linkBorder.left = "74.3vw";
            linkBorder.width = "8.7vw"
        }

        if (window.scrollY > 3500 ) {
            linkBorder.left = "85vw";
            linkBorder.width = "5.2vw"
        }
    })
    
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        if(!click){
        document.body.style.overflowY= "hidden"
        } else{ document.body.style.overflowY= "auto"}
    }

    const closeMobileMenu = () =>{
        setClick(false);
        document.body.style.overflowY= "auto"
    };

    const[banners, setBanner] = useState([])
    const loadBanner = async () => {
        const res = await axios.get('http://localhost:3001/api/banner');
        const Objeto = {
            text:res.data[0].text,
            title:res.data[0].title.url, 
            image:res.data[0].imageBanner.url}
        setBanner(Objeto)
    };

    useEffect(() => {
        loadBanner();
      }, []);
    return (
        <>
            <div className= "header">
                <div className="nav">
                    <div className="logo-container">
                        <img className="logo" src={Logo} alt="logo"/>
                    </div>
                    <ul className={click ? "nav-options active" : "nav-options"}>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#banner">iJunior Loop</a>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Entrega Modular</a>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Análise de Requisitos</a>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Desenvovimento</a>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Quem Somos</a>
                        </li>
                        <li className="option">
                        <a onClick={closeMobileMenu} href="#">Contato</a>
                        </li>
                        <li className="option wave"> 
                        </li>
                    </ul>
                    <div id="nav-link"></div>
                </div>
                <div className="mobile-menu" onClick={handleClick}>
                {click ? 
                    <>
                        <div className="menu-icon before">
                            <span id="before-1"></span>
                            <span id="before-2"></span>
                        </div>  
                    </>
                    :
                    <>
                        <div className="menu-icon after">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </>
                }
                </div>
            </div>
            <div>
                <div id="banner">
                    <div className="banner-text">
                        <img src={banners.title} alt="logo iJunior Loop"/>
                        <p>{banners.text}</p>
                        <div className="button">
                            <Button text = "Entre em Contato" Width={158} Height = {44}/>
                        </div>
                    </div>
                    <div className="banner-image" style = {{ backgroundImage: `url(${banners.image})`}}></div>
                </div>
            </div>
        </>

    )

}

export default Banner;