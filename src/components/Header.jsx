import React from "react";
import LogoHeader from "../assets/LogoHeader.jsx"

function Header(){

    return(
        <header className="h-[10vh]">
            <div className="bg-white w-screen h-[10vh] shadow-sm fixed flex justify-center z-50">
            <nav className="h-full flex justify-center items-center lg:justify-between lg:w-4xl xl:w-[85%] max-w-[1200px]">
                <span><LogoHeader></LogoHeader></span>
<ul className="hidden lg:flex lg:gap-10">
                    <li><a href="#AboutSection" className="hover:text-[#6624EB] font-semibold text-[#767dac] text-lg">Sobre</a></li>
                    <li><a href="#WorkSection" className="hover:text-[#6624EB] font-semibold text-[#767dac] text-lg">Processo</a></li>
                    <li><a href="#ServicesSection" className="hover:text-[#6624EB] font-semibold text-[#767dac] text-lg">Serviços</a></li>
                    <li><a href="#PriceSection" className="hover:text-[#6624EB] font-semibold text-[#767dac] text-lg">Preços</a></li>
                    <li><a href="#FeedbackSection" className="hover:text-[#6624EB] font-semibold text-[#767dac] text-lg">Clientes</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )

}

export default Header
