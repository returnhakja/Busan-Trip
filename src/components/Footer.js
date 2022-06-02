import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contents}>
                <div>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <span>강동현</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <span>곽예영</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <span>김도헌</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <span>박정인</span>
                </div>
            </div>
            <div>
                <h2 className={styles.title}>
                    강사님..고생하셨습니다ㅠ
                    <br />
                    Copyright by &copy; 2022 GUSAILSAENG
                </h2>
            </div>
        </footer>
    );
};

export default Footer;
