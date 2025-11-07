import React from "react";

function AboutSection(){

    return(
        <section className=" h-[70vh] bg-[#fafafa] flex justify-center items-center">
            <div className="flex flex-col w-sm gap-4">
                <h1 className="text-3xl text-center font-semibold"><span className="block">Desenvolvimento</span>da sua ideia na web</h1>
            <div className="flex flex-col gap-5">
                <p className="text-center text-lg text-[#767dac]">Na Dream, somos especialistas na criação de landing pages profissionais, desenvolvidas sob medida para cada cliente.</p>
                <p className="text-center text-lg text-[#767dac]">Atendemos negócios de diferentes segmentos, oferecendo design moderno, desempenho otimizado e foco em resultados.</p>
                <p className="text-center text-lg text-[#767dac]">Nosso compromisso é entregar páginas que transmitem credibilidade, fortalecem a imagem da sua marca e aumentam suas conversões.
                    Cada projeto é planejado com cuidado — do layout à experiência do usuário — para garantir excelência em cada detalhe.</p>
            </div>
            </div>
        </section>
    )
}

export default AboutSection