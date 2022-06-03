import { menu } from "./Menu";
import MenuItems from "./MenuItems";
import "../App.css";

const Navbar = () => {
    return (
        <nav className="region">
            <ul className="menus">
                {menu.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
