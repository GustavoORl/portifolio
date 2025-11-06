import React from "react";

function HeroSection() {

    return (
        <section className="flex justify-center bg-[#fafafa] h-[90vh]">
            <div className="h-full flex justify-center items-center w-sm">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl/14 text-start font-bold ">Crie experiências que encantam e convertem.</h1>
                    <p className="text-[#767dac] text-lg">Desenvolvo landing pages personalizadas que destacam o seu negócio e aumentam suas conversões, com design moderno e performance otimizada.</p>
                    <a href="#" className="bg-[#6624EB] text-white px-8 py-6 rounded-md mt-9 shadow-md font-semibold">Faça um orçamento</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;