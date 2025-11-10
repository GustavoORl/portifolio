import React from "react";
import LogoWhatsapp from "../assets/LogoWhatsapp";
import LogoEmail from "../assets/LogoEmail";
import { useState } from "react";
import { sendEvent } from "../utils/analytics";

function SectionContact() {

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        comments: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        sendEvent("email_form_submit", {
            category: "Contato",
            label: "Formulário de Email",
            method: "Mailchimp/FormSubmit",
        });


        alert("Mensagem enviada e e-mail cadastrado com sucesso!");
        setFormData({ name: "", lastname: "", email: "", comments: "" });

    try {
        // 1️⃣ Enviar para FormSubmit (email)
        await fetch("https://formsubmit.co/d5c5abcbf0c8500556703c8d37b44349", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                _subject: "Nova mensagem do site DreamSite",
                _captcha: "false",
                _autoresponse: "Olá! Recebemos sua mensagem e responderemos em breve. — DreamSite",
                ...formData,
            }),
        });

        // 2️⃣ Enviar para Mailchimp (inscrição na lista)
        const mailchimpData = new FormData();
        mailchimpData.append("FNAME", formData.name);
        mailchimpData.append("LNAME", formData.lastname);
        mailchimpData.append("EMAIL", formData.email);

        await fetch(
            "https://app.us9.list-manage.com/subscribe/post?u=3ac9e0599d19e238d2bd24523&id=90442c13fc&f_id=00b601e1f0",
            {
                method: "POST",
                body: mailchimpData,
                mode: "no-cors", // importante para evitar bloqueio CORS
            }
        );
    } catch (error) {
        console.log("Erro ao enviar formulário:", error);
        alert("Ocorreu um erro ao enviar. Tente novamente mais tarde!")
    }

    };


    return (
        <section className="h-screen flex justify-center pt-[100px] bg-[#Fafafa] lg:pt-0 lg:bg-white px-4">
            <div className="w-lg max-w-[1200px] flex flex-col items-center gap-5 lg:w-sm 2xl:w-md">
                <h6 className="bg-[#4353ff33] text-[#6624EB] px-3 py-1 rounded-2xl lg:hidden">Tem uma ideia?</h6>

                <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl xl:p-8">
                    <h5 className="text-2xl font-semibold text-gray-800 mb-6 lg:text-3xl lg:font-bold xl:text-center">Envie Uma mensagem</h5>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 w-full lg:space-y-3 2xl:space-y-6"
                    >
                        <div className="grid grid-cols-1 gap-6 lg:gap-2">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 xl:text-base 2xl:text-lg">
                                    Nome
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6624EB] focus:outline-none lg:border-b lg:border-x-0 lg:border-t-0 lg:rounded-none lg:focus:ring-0 lg:focus:border-b-[#6624EB]"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="lastname" className="text-sm font-medium text-gray-700 mb-1 xl:text-base 2xl:text-lg">
                                    Sobrenome
                                </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6624EB] focus:outline-none lg:border-b lg:border-x-0 lg:border-t-0 lg:rounded-none lg:focus:ring-0 lg:focus:border-b-[#6624EB]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 xl:text-base 2xl:text-lg">
                                Endereço de Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6624EB] focus:outline-none lg:border-b lg:border-x-0 lg:border-t-0 lg:rounded-none lg:focus:ring-0 lg:focus:border-b-[#6624EB]"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="comments" className="text-sm font-medium text-gray-700 mb-1 xl:text-base 2xl:text-lg">
                                Sua Mensagem
                            </label>
                            <textarea
                                id="comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                rows="5"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#6624EB] focus:outline-none resize-none "
                            ></textarea>
                        </div>

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