import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../darkmode/theme.jsx"


const Header = () => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header_icon" src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/647d2daa-a2e6-459c-5d07-6cf8d8362700/preview" /></Link>
                <h2 className="logo">Super Filmy</h2>
                <Link to="/movies/ulubione" style={{textDecoration:"none"}}><span>Ulubione</span></Link>
                <Link to="/movies/do obejrzenia" style={{textDecoration: "none"}}><span>Do obejrzenia</span></Link>
                <Link to="/movies/obejrzane" style={{textDecoration: "none"}}><span>Obejrzane</span></Link>
                <label className="switch">
                    <input id="themechange" type="checkbox" onClick={toggleTheme}/>
                    <span className="slider"></span>
                </label>
            </div>
            <div className="search">


            </div>
        </div>
    )
}

export default Header