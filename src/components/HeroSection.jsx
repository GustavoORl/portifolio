import React from "react";
import { sendEvent } from "../utils/analytics";

function HeroSection() {

    const handleClick = () => {
        sendEvent("whatsapp_click", {
            category: "Contato",
            label: "WhatsApp - hero",
            location: "Hero Section"
        });
        window.open("https://wa.me/5512991793561?text=Ol%C3%A1!%20Tenho%20interesse%20em%20fazer%20um%20or%C3%A7amento%20para%20criar%20um%20site.%20Poderia%20me%20ajudar%3F", "_blank");
    }


    return (
        <section className="flex justify-center h-[90vh] ">
            <div className="h-full flex justify-center items-center w-sm">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl/14 text-start font-bold ">Crie experiências que encantam e convertem.</h1>
                    <p className="text-secundary text-lg">Desenvolvemos landing pages personalizadas que destacam o seu negócio e aumentam suas conversões, com design moderno e performance otimizada.</p>
                    <button onClick={handleClick} className="bg-[#6624EB] text-white px-8 py-6 rounded-md mt-20 shadow-md font-semibold">Faça um orçamento</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;