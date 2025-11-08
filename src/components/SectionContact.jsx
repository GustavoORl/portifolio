import React from "react";
import LogoWhatsapp from "../assets/LogoWhatsapp";
import LogoEmail from "../assets/LogoEmail";

function SectionContact() {

    return (
        <section className="h-screen flex justify-center pt-[100px] bg-[#Fafafa]">
            <div className="w-sm flex flex-col items-center gap-5">
                <h6 className="bg-[#4353ff33] text-[#6624EB] px-3 py-1 rounded-2xl">Tem uma ideia?</h6>

                <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
                    <h5 className="text-2xl font-semibold text-gray-800 mb-6">Envie Uma mensagem</h5>

                    <form
                        method="post"
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-6"
                    >
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                                    Nome
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6624EB] focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="lastname" className="text-sm font-medium text-gray-700 mb-1">
                                    Sobrenome
                                </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6624EB] focus:outline-none"
                                />
                            </div>
                        </div>

                        
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                                Endereço de Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6624EB] focus:outline-none"
                            />
                        </div>

                        
                        <div className="flex flex-col">
                            <label htmlFor="comments" className="text-sm font-medium text-gray-700 mb-1">
                                Sua Mensagem
                            </label>
                            <textarea
                                id="comments"
                                name="comments"
                                rows="5"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6624EB] focus:outline-none resize-none"
                            ></textarea>
                        </div>

                        {/* BOTÃO */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#6624EB] hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )

}

export default SectionContact;