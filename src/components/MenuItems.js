import Dropdown from "./Dropdown";
import { useState } from "react";

const Menu_Items = ({ items }) => {
    const [dropdown, setDropdown] = useState("false");
    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown.status ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{" "}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <a href="/#">{items.title}</a>
            )}
        </li>
    );
};

export default Menu_Items;
