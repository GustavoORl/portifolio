import React from "react";
import LogoFooter from "../assets/LogoFooter";

function Footer(){

    return(
        <footer className="bg-[#6624EB] flex flex-col items-center gap-7 px-4">
            <div className="flex items-center pt-7">
            <LogoFooter width={100} className="sm:w-[150px]"></LogoFooter>
            </div>
            <hr className="w-lg max-w-[1200px] border-white lg:w-4xl"></hr>
            <div className="pb-7 text-white">
                <p className="text-xs sm-mob:text-base">
                    2025 © Dream. Todos os direitos reservados.
                        
                </p>
            </div>
        </footer>
    )
}

export default Footer