import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
import ing from "../img/down.jpg";

function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <nav className="navbar">
                {/* <Link to="/" className="navbar-logo"> */}
                <div>
                    <img className="mainimg" src={ing} alt="mainImg" />
                </div>

                {/* </Link> */}
                <ul className="nav-items">
                    {navItems.map((item) => {
                        if (item.title === "전체보기") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >
                                    <p>{item.title}</p>
                                    {dropdown && <Dropdown />}
                                </li>
                            );
                        }
                        return (
                            <li key={item.id} className={item.cName}>
                                <p to={item.path}>{item.title}</p>
                            </li>
                        );
                    })}
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;
