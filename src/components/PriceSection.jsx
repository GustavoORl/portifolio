import React from "react";
import { sendEvent } from "../utils/analytics";

function PriceSection() {

    const handleClick = () => {
        sendEvent("whatsapp_click", {
            category: "Contato",
            label: "Preços - WhatsApp",
            location: "Price Section",
        });
        window.open("https://wa.me/5512991793561?text=Ol%C3%A1!%20Tenho%20interesse%20em%20fazer%20um%20or%C3%A7amento%20para%20criar%20um%20site.%20Poderia%20me%20ajudar%3F", "_blank");
    };



    return (
        <section className="flex justify-center pt-[100px] bg-[#fafafa] pb-10">
            <div className="w-sm">
                <div className="flex flex-col items-center gap-5">
                    <h6 className="bg-[#4353ff33] text-[#6624EB] px-3 py-1 rounded-2xl">Preços</h6>

                    <div className="flex justify-center items-center bg-white w-full shadow-sm">
                        <div className="flex flex-col gap-5 p-10">
                            <h3 className="text-2xl text-black">Plano Básico</h3>
                            <p className="text-secundary">Presença online rápida e profissional.<span className="block text-xl">A partir de</span></p>
                            <hr className="text-secundary"></hr>
                            <h1 className="text-start mt-3 mb-3"><span className="font-bold text-black">R$</span> <span className="text-[#6624EB] text-5xl font-extrabold">500</span></h1>
                            <hr className="text-secundary"></hr>
                            <h3>Design Profissional</h3>
                            <h3>Responsivo com todos os dispositivos</h3>
                            <h3>Seo Básico</h3>
                            <h3>Integração com chat do Whatsapp</h3>
                            <button onClick={handleClick} className="bg-[#6624EB] text-white px-6 py-4 rounded-md shadow-md font-semibold">Fale conosco</button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center bg-white w-full border-1 border-[#6624EB] relative shadow-sm">
                        <div className="flex flex-col gap-5 p-10">
                            <h3 className="text-2xl text-black">Plano Profissional</h3>
                            <h3 className="absolute right-0 px-4 py-2 text-white rounded-l-full bg-[#6624EB]">Popular</h3>
                            <p className="text-secundary">Para quem quer resultados reais. <span className="block text-xl">A partir de</span></p>
                            <hr className="text-secundary"></hr>
                            <h1 className="text-start mt-3 mb-3"> <span className="font-bold text-black">R$</span> <span className="text-[#6624EB] text-5xl font-extrabold">700</span></h1>
                            <hr className="text-secundary"></hr>
                            <h3>Design Profissional</h3>
                            <h3>Responsivo com todos os dispositivos</h3>
                            <h3>Seo Otimizado</h3>
                            <h3>Integração com chat do Whatsapp</h3>
                            <h3>Integração com Meta Pixel, MailChimp e Google Analytics</h3>
                            <button onClick={handleClick} className="bg-[#6624EB] text-white px-6 py-4 rounded-md shadow-md font-semibold">Fale conosco</button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center bg-white w-full shadow-sm">
                        <div className="flex flex-col gap-5 p-10">
                            <h3 className="text-2xl text-black">Plano E-commerce</h3>
                            <p className="text-secundary">Presença online rápida e profissional. <span className="block text-xl">A partir de</span></p>
                            <hr className="text-secundary"></hr>
                            <h1 className="text-start mt-3 mb-3"> <span className="font-bold text-black">R$</span> <span className="text-[#6624EB] text-5xl font-extrabold">3500</span></h1>
                            <hr className="text-secundary"></hr>
                            <h3>Design Profissional</h3>
                            <h3>Responsivo com todos os dispositivos</h3>
                            <h3>Seo Otimizado</h3>
                            <h3>Todas as funcionalidades de E-commerce (carrinho, compra on-line, login, etc.)</h3>
                            <button onClick={handleClick} className="bg-[#6624EB] text-white px-6 py-4 rounded-md shadow-md font-semibold">Fale conosco</button>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default PriceSection