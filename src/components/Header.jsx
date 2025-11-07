import React from "react";
import Logo from "../assets/Logo.jsx"

function Header(){

    return(
        <header className="relative h-[10vh]">
            <div className="bg-white w-screen h-[10vh] z-99 shadow-sm fixed">
            <nav className="h-full flex justify-center items-center">
                <span><Logo></Logo></span>
            </nav>
            </div>
        </header>
    )

}

export default Header
