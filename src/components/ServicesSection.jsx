import React from "react";
import Imagem from "../assets/imagem.png"
import LogoReact from "../assets/LogoReact"
import LogoVercel from "../assets/LogoVercel"
import LogoMailchimp from "../assets/LogoMailchimp";
import LogoGoogleAnalytics from "../assets/LogoGoogleAnalytics";


function ServicesSection() {

    return (
        <section className=" flex justify-center pt-[100px] px-4 bg-[#fafafa] lg:px-0">
            <div className="w-lg max-w-[1200px] flex flex-col items-center gap-5 lg:w-4xl xl:w-[85%]">
                <div className="flex flex-col items-center gap-5 lg:mb-20">
                <h6 className="bg-[#4353ff33] text-[#6624EB] px-3 py-1 rounded-2xl">Serviços</h6>
                <h1 className="text-center text-3xl font-semibold"><span className="block">Os melhores serviços web</span> para um negócio eficaz</h1>
                </div>

                <div className="lg:flex lg:w-full lg:items-center">
                <div className="flex-2/5">
                <img src={Imagem} width={500} className="pb-5"></img>
                </div>
                <div className="flex-3/5 flex flex-col">
                <div className="flex pl-7 pb-5 gap-5">
                    <div>
                    <LogoReact></LogoReact>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">Desenvolvimento Moderno</h3>
                        <p className="text-secundary lg:text-lg">Seu site é desenvolvido com React, uma das tecnologias mais modernas do mercado.
                            Isso garante velocidade, estabilidade e uma experiência fluida em qualquer dispositivo.</p>
                    </div>
                </div>

                <div className="flex pl-7 pb-5 gap-5">
                    <div>
                    <LogoVercel width={100}></LogoVercel>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">Hospedagem de Alto Desempenho</h3>
                        <p className="text-secundary lg:text-lg">Hospedamos seu site na Vercel, plataforma reconhecida pela rapidez e confiabilidade.
                            Com ela, sua landing page fica sempre online e carregando em segundos.</p>
                    </div>
                </div>

                <div className="flex pl-7 pb-5 gap-5">
                    <div>
                    <LogoMailchimp width={50}></LogoMailchimp>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">Estratégia de E-mail Marketing</h3>
                        <p className="text-secundary lg:text-lg">Integramos o Mailchimp para gerenciar campanhas de e-mail e captar leads de forma automática.
                            Assim, você mantém um relacionamento constante com seus clientes.</p>
                    </div>
                </div>

                <div className="flex pl-7 pb-5 gap-5">
                    <div>
                    <LogoGoogleAnalytics></LogoGoogleAnalytics>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">Monitoramento Inteligente</h3>
                        <p className="text-secundary lg:text-lg">Usamos Google Analytics para acompanhar o desempenho da sua página.
                            Você tem insights reais sobre acessos, comportamento e resultados do seu público.</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    )

}

export default ServicesSection