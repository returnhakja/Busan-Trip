import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contents}>
                <div className={styles.team_member}>
                    <FontAwesomeIcon
                        icon={faSailboat}
                        size="2x"
                        className={styles.giticon}
                    />
                    <p>강동현</p>
                </div>
                <div className={styles.team_member}>
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        className={styles.giticon}
                    />
                    <p>곽예영</p>
                </div>
                <div className={styles.team_member}>
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        className={styles.giticon}
                    />
                    <p>김도헌</p>
                </div>
                <div className={styles.team_member}>
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        className={styles.giticon}
                    />
                    <p>박정인</p>
                </div>
            </div>
            <div>
                <h2 className={styles.title}>
                    <br />
                    Copyright by &copy; 2022 GUSAILSAENG
                </h2>
            </div>
        </footer>
    );
};

export default Footer;
