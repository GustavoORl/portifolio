import React from "react";
import { sendEvent } from "../utils/analytics";
import SectionContact from "./SectionContact"

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
        <section className="flex justify-center items-center px-4 h-[90vh] lg:px-0 ">
            <div className="w-lg max-w-[1200px] lg:w-4xl lg:h-[80%] lg:flex lg:justify-between lg:items-center xl:w-[85%] xl:h-[70%]">
                <div className="flex flex-col gap-6 lg:gap-0 lg:h-[80%] lg:justify-evenly lg:w-sm xl:w-xl">
                    <h1 className="text-4xl/12 text-start font-bold sm-mob:text-5xl/14 xl:text-6xl">Crie experiências que encantam e convertem.</h1>
                    <p className="text-secundary text-lg md:text-xl xl:text-2xl">Desenvolvemos landing pages personalizadas que destacam o seu negócio e aumentam suas conversões.</p>
                    <button onClick={handleClick} className="bg-[#6624EB] text-white py-4 rounded-md mt-20 shadow-md font-semibold sm-mob:py-6 lg:w-80 lg:mt-10 xl:text-start xl:px-5 2xl:py-6 2xl:text-xl">Faça um orçamento</button>
                </div>



                <div className="hidden lg:flex justify-center lg:h-full">
                    <SectionContact></SectionContact>
                </div>
            </div>

        </section>

    )
}

export default HeroSection;


{/* <section className="flex justify-center h-[90vh]">
            <div className="h-full flex justify-center items-center w-xs">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl/14 text-start font-bold ">Crie experiências que encantam e convertem.</h1>
                    <p className="text-secundary text-lg">Desenvolvemos landing pages personalizadas que destacam o seu negócio e aumentam suas conversões, com design moderno e performance otimizada.</p>
                    <button onClick={handleClick} className="bg-[#6624EB] text-white px-8 py-6 rounded-md mt-20 shadow-md font-semibold">Faça um orçamento</button>
                </div>
            </div>
        </section> */}