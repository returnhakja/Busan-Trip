import React from "react";
import "./Main.module.css";
import clear from "../img/clear.png";

function Main() {
    return (
        <div className="body-wrapper">
            <div className="maincoutainer">
                <img className="main-img" src={clear} alt="clear" />
            </div>
        </div>
    );
}

export default Main;
