import React from "react";
import Logo from "../assets/Logo.jsx"

function Header(){

    return(
        <header className="relative h-[72px]">
            <div className="bg-white w-screen pt-[15px] pb-[15px] z-99 shadow-sm fixed">
            <nav className="flex justify-center items-center">
                <span><Logo></Logo></span>
            </nav>
            </div>
        </header>
    )

}

export default Header
