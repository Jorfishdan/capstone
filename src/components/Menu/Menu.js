import "./Menu.scss";
import house from "../../assets/images/house-static.png";
import menu from "../../assets/images/menu.png";
import { Link } from "react-router-dom";
import clock from "../../assets/images/pocket-watch.png";
import info from "../../assets/images/info-static.png";
import { useState } from "react";
import MenuModal from "../MenuModal/MenuModal";

function Menu() {
    const [openMenu, setOpenMenu] = useState(false);

function openModal() {
    setOpenMenu(prevOpenMenu => !prevOpenMenu);
    
}

  return (
    <>
      <div className="menu__wrapper">
        <Link to="/">
          <div
            className="menu__home"
          />
        </Link>
        <div className="menu__side-wrapper">
           
            
        <div
          className="menu__menu" onClick={openModal}
          
        /> 
             {openMenu && <MenuModal closeModal={() => setOpenMenu(false)} />}
      </div>
      </div>
    </>
  );
}

export default Menu;
