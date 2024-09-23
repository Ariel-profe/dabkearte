"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../ui/animated-modal";
import { TextHoverEffect } from "../ui/text-hover-effect";

export function Surprise() {

    return (
        <section className="py-40 flex items-center justify-center">
            <Modal>
                <ModalTrigger className="flex justify-center group/modal-btn w-full lg:h-[22rem]">
                    <TextHoverEffect text="#YODABKEARTE" />
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg lg:text-4xl text-primary font-bold text-center mb-8">
                            ¡Cumplimos 10 años y haremos un gran show!
                        </h4>
                        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start text-center max-w-sm mx-auto text-black">
                            <p>ESPERAMOS CONTRAR CON TU PRESENCIA Y QUE NOS ACOMPAÑES EN ESTE GRAN MOMENTO PARA NOSOTROS</p>
                            <p className="text-secondary">Quedate atento a nuestras redes y sitio web para tener más detalles</p>
                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                            Gracias
                        </button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </section>
    );
};