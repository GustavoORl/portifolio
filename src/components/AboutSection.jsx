import React from "react";

function AboutSection(){

    return(
        <section className=" h-[80vh] flex justify-center items-center px-4 lg:px-0">
            <div className="flex flex-col w-lg gap-4 max-w-[1200px] lg:w-2xl xl:w-3xl 2xl:w-3xl">
                <h1 className="text-3xl text-center font-semibold xl:text-4xl"><span className="block">Desenvolvimento</span>da sua ideia na web</h1>
            <div className="flex flex-col gap-5 text-center text-lg text-secundary lg:text-xl xl:text-3xl">
                <p>Na Dream, somos especialistas na criação de landing pages profissionais, desenvolvidas sob medida para cada cliente.</p>
                <p>Atendemos negócios de diferentes segmentos, oferecendo design moderno, desempenho otimizado e foco em resultados.</p>
                <p>Nosso compromisso é entregar páginas que transmitem credibilidade, fortalecem a imagem da sua marca e aumentam suas conversões.
                    Cada projeto é planejado com cuidado — do layout à experiência do usuário — para garantir excelência em cada detalhe.</p>
            </div>
            </div>
        </section>
    )
}

export default AboutSection