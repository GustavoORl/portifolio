import React from "react";
import LogoFooter from "../assets/LogoFooter";

function Footer(){

    return(
        <footer className="bg-[#6624EB] flex flex-col items-center gap-7 ">
            <div className="flex items-center pt-7">
            <LogoFooter width={100}></LogoFooter>
            </div>
            <hr className="w-90 border-white"></hr>
            <div className="pb-7 text-white">
                <p className="">
                    2025 © Dream. Todos os direitos reservados.
                        
                </p>
            </div>
        </footer>
    )
}

export default Footer