import React, { useState } from "react";
import "./Main.module.css";
import clear from "../img/clear.png";
import { Link } from "react-router-dom";
import place from "../api/mock.json";

function getRandomInt(min, max) {
    console.log("----------");
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min)));
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function Main() {
    // const [random, setRandom] = useState([]);

    let a = Math.floor(Math.random() * 100) + 1;
    const items = place.getAttractionKr.item;
    return (
        <div className="body-wrapper">
            <div className="maincoutainer">
                <img className="main-img" src={clear} alt="clear" />
            </div>
            <div>
                {items.map((item, index) => {
                    if (a === index || a === index + 1 || a === index + 2) {
                        return (
                            <span className="image1">
                                <Link to="Detail">
                                    <img
                                        className="image"
                                        src={item.MAIN_IMG_THUMB}
                                        alt="gallery"
                                    />
                                </Link>
                                <p>{item.TITLE}</p>
                            </span>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default Main;
