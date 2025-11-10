import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable"

function FeedbackSection() {

    const feedbacks = [
        {
            id: 1,
            nome: "Zezinho",
            comentario: "A equipe da Dream fez um trabalho incrível! Meu site ficou lindo e recebo novos clientes todos os dias."
        },
        {
            id: 2,
            nome: "Joãozinho",
            comentario: "Muito satisfeito com o resultado! Atendimento rápido, profissional e um design que realmente vende."
        },
        {
            id: 3,
            nome: "aninha",
            comentario: "Recomendo demais! A comunicação foi excelente e o resultado superou minhas expectativas."
        }
    ]

    const [current, setCurrent] = useState(0);

    const nextFeedback = () => {
        setCurrent((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    }

    const prevFeedback = () => {
        setCurrent((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
    }

    useEffect(() => {
        const interval = setInterval(nextFeedback, 4000);
        return () => clearInterval(interval);
    }, [current])

    const handlers = useSwipeable({
        onSwipedLeft: nextFeedback,
        onSwipedRight: prevFeedback,
        preventScrollOnSwipe: true,
        trackMouse: true,
    })

    return (
        <section className=" relative flex flex-col gap-5 pt-[100px] pb-[100px] items-center justify-center bg-[#fafafa] px-4 lg:px-0">
            <h6 className="bg-[#4353ff33] text-[#6624EB] px-3 py-1 rounded-2xl">Feedback de clientes</h6>
        
            <div {...handlers} className="h-[35vh] w-[90%] max-w-[1200px] overflow-hidden flex flex-col gap-10 items-center justify-center bg-white shadow-sm rounded-2xl sm:h-[50vh] sm:w-lg lg:w-4xl">

                <div className="flex transition-transform duration-700 ease-in-out w-full"
                    style={{ transform: `translateX(-${current * 100}%)` }}>

                    {feedbacks.map((instancia) => (
                        <div key={instancia.id}
                            className="flex flex-shrink-0 w-full justify-center items-center">
                        <div className="flex flex-col items-center justify-center text-center gap-3 w-[90%] lg:w-[70%]">
                            <p className="text-xl xl:text-2xl">"{instancia.comentario}"</p>
                            <hr className="w-30 border-1 border-[#6624EB]"></hr>
                            <h3 className="xl:text-xl">"{instancia.nome}"</h3>
                        </div>
                        </div>
                    ))}
                </div>

            </div>
        
        <div className="flex justify-center gap-2">
                    {feedbacks.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2 h-2 rounded-full ${current === index ? "bg-[#6624EB]" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
        </section>
    )
}

export default FeedbackSection