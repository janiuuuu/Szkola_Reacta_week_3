import React from "react";
import MenuLink from "./MenuLink";

const Menu = () => {
    return(
        <>
            <ul>
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to="/contact" isActive>Contact</MenuLink>
                <MenuLink to="/posts">Posts</MenuLink>
            </ul>
        </>
    );
}

export default Menu;