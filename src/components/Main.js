import React, { useState } from "react";
import styles from "./Main.module.css";
import clear from "../img/clear.png";
import { Link } from "react-router-dom";
import place from "../api/mock.json";
import Footer from "./Footer";

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
        <div className={styles["body-wrapper"]}>
            <div className="Main_img">
                <img className={styles["main-img"]} src={clear} alt="clear" />
            </div>
            <div className="maincontainer">
                <div className={styles["img-flex"]}>
                    {items.map((item, index) => {
                        if (a === index || a === index + 1 || a === index + 2) {
                            return (
                                <p className="image1">
                                    <Link to="Detail">
                                        <img
                                            className="image"
                                            src={item.MAIN_IMG_THUMB}
                                            alt="gallery"
                                        />
                                    </Link>
                                    <p>{item.TITLE}</p>
                                </p>
                            );
                        }
                    })}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Main;
