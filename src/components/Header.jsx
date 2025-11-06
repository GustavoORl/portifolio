import React from "react";
import Logo from "../assets/logo.png"

function Header(){

    return(
        <header className="bg-white pt-[15px] pb-[15px] z-99 shadow-sm">
            <nav className="flex justify-center items-center">
                <span><img src={Logo} width={150}></img></span>
            </nav>
            
        </header>
    )

}

export default Header
