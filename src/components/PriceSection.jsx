import React from "react";

function PriceSection() {

    return (
        <section className="flex justify-center pt-[100px] bg-[#fafafa] pb-10">
            <div className="w-sm">
                <div className="flex flex-col items-center gap-5">
                    <h6 className="bg-[#4353ff33] text-[#6624EB] px-3 py-1 rounded-2xl">Preços</h6>

                    <div className="flex justify-center items-center bg-white w-full">
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
                            <a href="#" className="bg-[#6624EB] text-white px-6 py-4 rounded-md shadow-md font-semibold">Fale conosco</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center bg-white w-full border-1 border-[#6624EB] relative">
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
                            <a href="#" className="bg-[#6624EB] text-white px-6 py-4 rounded-md shadow-md font-semibold">Fale conosco</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center bg-white w-full">
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
                            <a href="#" className="bg-[#6624EB] text-white px-6 py-4 rounded-md shadow-md font-semibold">Fale conosco</a>
                        </div>
                    </div>

                </div>
            </div>



        </section>
    )
}

export default PriceSection