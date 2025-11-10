import React from "react";
import Lampada from "../assets/Lampada.jsx"
import Pincel from "../assets/Pincel.jsx"
import Desenvolvedor from "../assets/Desenvolvedor.jsx"
import Arrow from "../assets/arrow-1.png"
import Flecha from "../assets/arrow-2.png"

function WorkSection() {

    return (
        <section className="flex justify-center bg-white pt-[100px] px-4 lg:px-0 lg:h-[90vh]">
            <div className="w-lg max-w-[1200px] lg:w-4xl xl:w-[85%]">
                
                    <div className="flex flex-col items-center gap-5 mb-7 lg:mb-20">
                    <h6 className="bg-[#4353ff33] text-[#6624EB] px-3 py-1 rounded-2xl">Como Funciona?</h6>
                    <h1 className="text-3xl font-semibold text-center"><span className="block">Começamos com 3</span> passos fáceis</h1>
                    </div>

                    <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-evenly">
                    <div className="h-[40vh] flex-1 flex justify-center mt-7 lg:mt-0 lg:relative">
                        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
                            <div className="bg-[#6624EB] p-7 rounded-full flex justify-center items-center">
                                <Lampada></Lampada>
                            </div>
                            <h3 className="font-bold text-2xl">Análise do produto</h3>
                            <p className="text-center text-lg text-secundary">Analisamos sua ideia e entendemos como transformá-la em um produto digital atrativo e funcional.</p>
                        </div>
                        <div className="hidden lg:block">
                            <img src={Arrow} className="absolute left-[77%] top-[77px] w-[180px]"></img>
                        </div>
                    </div>

                    <div className="h-[40vh] flex-1 flex justify-center lg:relative">
                        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
                            <div className="bg-[#6624EB] p-7 rounded-full flex justify-center items-center">
                                <Pincel></Pincel>
                            </div>
                            <h3 className="font-bold text-2xl">Desing do produto</h3>
                            <p className="text-center text-lg text-secundary">Criamos um layout visual envolvente, focado em transmitir sua mensagem e gerar conversões.</p>
                        </div>
                        <div className="hidden lg:block">
                            <img src={Flecha} className="absolute left-[77%] top-[44px] w-[180px]"></img>
                        </div>
                    </div>

                    <div className="h-[40vh] flex-1 flex justify-center">
                        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
                            <div className="bg-[#6624EB] p-7 rounded-full flex justify-center items-center">
                                <Desenvolvedor></Desenvolvedor>
                            </div>
                            <h3 className="font-bold text-2xl text-center">Desenvolvimento</h3>
                            <p className="text-center text-lg text-secundary ">Transformamos o design em uma landing page rápida, responsiva e otimizada para resultados.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WorkSection