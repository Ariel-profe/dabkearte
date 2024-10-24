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
        <section className="py-40 flex relative items-center justify-center group bg-slate-950/50">
            <Modal>
                <ModalTrigger className="flex flex-col justify-center group/modal-btn w-full lg:h-[22rem]">
                <p className="text-slate-200 text-center w-full max-w-sm mx-auto">Se vienen cositas <br /> ¡Haz click para más info!</p>
                    <TextHoverEffect text="#YoDabkeArte" />
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg lg:text-4xl mb-2 text-primary font-bold text-center">
                            ¡Cumplimos 10 años!
                        </h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-6 items-start justify-start text-center max-w-md mx-auto text-black">
                            <img src="/banner.png" alt="banner-show" />
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