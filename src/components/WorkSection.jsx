import React from "react";
import Lampada from "../assets/Lampada.jsx"
import Pincel from "../assets/Pincel.jsx"
import Desenvolvedor from "../assets/Desenvolvedor.jsx"

function WorkSection() {

    return (
        <section className="flex justify-center h-screen bg-white mt-7">
            <div className="w-sm">
                <div className="flex flex-col items-center gap-7">
                    <h6 className="bg-[#4353ff33] text-[#6624EB] px-3 py-1 rounded-2xl">Como Funciona?</h6>
                    <h1 className="text-3xl font-semibold text-center"><span className="block">Começamos com 3</span> passos fáceis</h1>

                    <div className="w-sm h-[45vh] flex justify-center mt-7">
                        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
                            <div className="bg-[#6624EB] p-7 rounded-full flex justify-center items-center">
                                <Lampada></Lampada>
                            </div>
                            <h3 className="font-bold text-xl">Análise do produto</h3>
                            <p className="text-center text-[#767dac]">Analisamos sua ideia e entendemos como transformá-la em um produto digital atrativo e funcional.</p>
                        </div>
                    </div>

                    <div className="w-sm h-[45vh] flex justify-center">
                        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
                            <div className="bg-[#6624EB] p-7 rounded-full flex justify-center items-center">
                                <Pincel></Pincel>
                            </div>
                            <h3 className="font-bold text-xl">Desing do produto</h3>
                            <p className="text-center text-[#767dac]">Criamos um layout visual envolvente, focado em transmitir sua mensagem e gerar conversões.</p>
                        </div>
                    </div>

                    <div className="w-sm h-[45vh] flex justify-center">
                        <div className="w-[90%] flex flex-col justify-center items-center gap-5">
                            <div className="bg-[#6624EB] p-7 rounded-full flex justify-center items-center">
                                <Desenvolvedor></Desenvolvedor>
                            </div>
                            <h3 className="font-bold text-xl">Desenvolvimento do produto</h3>
                            <p className="text-center text-[#767dac] ">Transformamos o design em uma landing page rápida, responsiva e otimizada para resultados e conversão de leads.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WorkSection