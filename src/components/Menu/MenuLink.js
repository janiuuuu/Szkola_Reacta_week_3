import React from "react";

const MenuLink = ({ children, to, isActive}) =>{
    const styleActive = {
        color: "red"
    }

    return(
        <li>
            <a style={isActive ? styleActive : null} href = {to}>{ children }</a>
        </li>
    );
}
export default MenuLink;