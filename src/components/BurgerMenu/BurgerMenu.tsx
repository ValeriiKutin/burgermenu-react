import { useEffect, useState } from "react";
import { useBurgerMenuStore } from "../../stores/burger-menu-store";
import "./burger-menu.scss";

export const BurgerMenu = () => {
  // const [isToggleBurger, setIsToggleBurger] = useState(false);
  // const handleBurgerMenu = () => {
  //   setIsToggleBurger(!isToggleBurger);
  // };
  const isToggleBurgerMenu = useBurgerMenuStore(
    (state) => state.isToggleBurgerMenu
  );
  const toggleBurgerMenu = useBurgerMenuStore(
    (state) => state.toggleBurgerMenu
  );
  useEffect(() => {
    if (isToggleBurgerMenu) {
      document.body.classList.add("__lock");
    } else {
      document.body.classList.remove("__lock");
    }
  }, [isToggleBurgerMenu]);

  return (
    <div className="menu-wrapper">
      <div className="menu-btns">
        {isToggleBurgerMenu ? (
          <button className="close" onClick={toggleBurgerMenu}></button>
        ) : (
          <button className="open" onClick={toggleBurgerMenu}>
            <span></span>
          </button>
        )}
      </div>

      <nav className={isToggleBurgerMenu ? "menu__body _active" : "menu__body"}>
        <ul className="menu__list">
          <li className="menu_item">
            <a href="#" className="menu__link">
              Home
            </a>
          </li>
          <li className="menu_item">
            <a href="#" className="menu__link">
              About
            </a>
          </li>
          <li className="menu_item">
            <a href="#" className="menu__link">
              Contact
            </a>
          </li>
          <li className="menu_item">
            <a href="#" className="menu__link">
              Store
            </a>
          </li>
          <li className="menu_item">
            <a href="#" className="menu__link">
              Features
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
