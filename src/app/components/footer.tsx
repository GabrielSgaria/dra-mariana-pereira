"use client";
import behance from '../../public/image/behance.png'
import {
    DesktopIcon,
    EnvelopeClosedIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

import { BehanceLogo, MapPin } from '@phosphor-icons/react';

export function Footer() {
    function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
        var linkWhatsApp =
            "https://wa.me/" +
            numeroTelefone +
            "?text=" +
            encodeURIComponent(mensagemPadrao);

        window.open(linkWhatsApp, "_blank");

    }

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <footer id="contacts" className=" border-t-[1px] border-neutral-200 pb-8 font-sans mt-10 bg-pink-50">
            <div className="container mx-auto mt-16 flex flex-col gap-16 sm:flex-row sm:justify-around sm:gap-0">
                <div className="flex flex-col items-center sm:items-start ">
                    <h1 className="text-3xl font-semibold bebasNeue text-neutral-800">
                        Informações <br />
                        para contato
                    </h1>
                    <p className="mt-8 max-w-[300px] text-center sm:text-start text-xl sm:text-xl saira text-neutral-600">
                        Sinta-se à vontade para entrar em contato conosco a qualquer
                        momento.
                    </p>
                    <div className="mt-8 flex flex-col gap-4 text-center sm:items-start sm:justify-start">
                        <a
                            onClick={() =>
                                sendMensage(
                                    554135516675,
                                    "Olá Dra. Mariana! Vim através do seu site."
                                )
                            }
                            className="flex cursor-pointer items-center justify-center gap-4 text-neutral-800"
                        >
                            <FaWhatsapp className="size-6" />
                            <p className="h-6 items-center  justify-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-neutral-800">
                                (41) 3551-6675
                            </p>
                        </a>
                        <Link
                            target="blank"
                            href="https://www.google.com/maps/dir//R.+Rio+Solimões,+507+-+Jardim+Weissópolis,+Pinhais+-+PR,+83322-150/@-25.4550074,-49.2648643,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94dcefde0126ce6f:0x2bb1404002f4d154!2m2!1d-49.1824628!2d-25.4550304?entry=ttu"
                            className="flex cursor-pointer  items-center gap-4 text-neutral-800"
                        >
                            <MapPin className="size-6" />
                            <p className="h-6 font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-neutral-800">
                                R. Rio Solimões, 507 - Weissópolis, Pinhais - PR,
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center sm:items-start ">
                    <h1 className="text-3xl font-semibold bebasNeue text-neutral-800">
                        Menu <br />
                        Rápido
                    </h1>

                    <nav className="md:flex grow justify-center">
                        <div className={`mt-8 flex flex-col gap-4 text-center sm:items-start sm:justify-start`}>
                            <button className="rounded-xl transition-all duration-200 text-pink-900 font-semibold text-base uppercase px-2"
                                onClick={() => scrollToSection("about")}>
                                Quem somos?
                            </button>
                            <button className="rounded-xl transition-all duration-200 text-pink-900 font-semibold text-base uppercase px-2"
                                onClick={() => scrollToSection("services")}>
                                Serviços
                            </button>
                            <button className="rounded-xl transition-all duration-200 text-pink-900 font-semibold text-base uppercase px-2"
                                onClick={() => scrollToSection("portfolio")}>
                                Localização
                            </button>
                            <button className="rounded-xl transition-all duration-200 text-pink-900 font-semibold text-base uppercase px-2"
                                onClick={() => scrollToSection("questions")}>
                                Perguntas frequentes
                            </button>
                        </div>
                    </nav>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <h1 className="text-center text-3xl font-semibold bebasNeue text-neutral-800 sm:text-start ">
                        Nos encontre nas <br />
                        redes sociais
                    </h1>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:items-start">

                        <Link
                            target="blank"
                            href="https://www.instagram.com/dramarianapereirafs/"
                            className="flex cursor-pointer flex-row items-center gap-4 text-neutral-800"
                        >
                            <FaInstagram className="size-6" />
                            <p className="h-6 font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-neutral-800">
                                @dramarianapereirafs
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-16 flex h-8 cursor-pointer items-center justify-center space-x-2 text-neutral-500 transition-all  hover:font-semibold hover:text-zinc-950">
                <h1 className="max-w-[300px] text-sm sm:text-start ">
                    <Link target="blank" href="https://www.sgariatech.com.br">
                        Desenvolvido por Sgaria Tech
                    </Link>
                </h1>
                <div>
                    <DesktopIcon className="size-4 items-center " />
                </div>
            </div>
        </footer>
    );
}
