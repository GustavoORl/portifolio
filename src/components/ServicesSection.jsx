import React from "react";
import Icon from "../assets/Icon.png"

function ServicesSection(){

    return(
        <section className="h-screen flex justify-center pt-[100px] bg-[#fafafa]">
            <div className="w-[90%] flex flex-col items-center gap-5">
                <h6 className="bg-[#4353ff33] text-[#6624EB] px-3 py-1 rounded-2xl">Serviços</h6>
                <h1 className="text-center text-3xl font-semibold"><span className="block">Os melhores serviços web</span> para um negócio eficaz</h1>
                <img src={Icon} width={100}></img>
            </div>
        </section>
    )

}

export default ServicesSection