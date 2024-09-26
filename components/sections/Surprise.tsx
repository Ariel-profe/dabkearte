"use client";

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
        <section className="py-40 flex relative items-center justify-center group">
            <Modal>
                <ModalTrigger className="flex flex-col justify-center group/modal-btn w-full lg:h-[22rem]">
                <p className="text-slate-200 text-center w-full">Se vienen cositas, ¡haz click para más info!</p>
                    <TextHoverEffect text="#YoDabkeArte" />
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg lg:text-4xl text-primary font-bold text-center mb-8">
                            ¡Cumplimos 10 años!
                        </h4>
                        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start text-center max-w-sm mx-auto text-black">
                            AQUI BANNER DEL SHOW
                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <button className="bg-primary text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                            Gracias
                        </button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </section>
    );
};