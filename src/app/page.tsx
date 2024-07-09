'use client'
import Image from "next/image";
import Link from "next/link";
import { sendMensage } from "./lib/actions";
import { Syringe } from "@phosphor-icons/react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="container mx-auto flex h-[620px]">
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex flex-col gap-2 items-start justify-center h-full">
            <span className="text-xl uppercase font-light text-pink-800 mb-5">Clinica estética em pinhais</span>
            <div className="text-7xl font-normal text-pink-900 mb-5">
              <h1>Beleza Personalizada</h1>
              <h1>com Dra. Mariana<br />Pereira</h1>
            </div>
            <span className="text-xl text-pink-800">Resultados incríveis, mantendo sua essência</span>
            <div className="mt-10">
              <button
                onClick={() =>
                  sendMensage(
                    554135516675,
                    "Olá! Vim através do site da Cami Agência Criativa."
                  )
                }
                className="shadow-xl sm:py-3 sm:px-8 px-3 py-2 rounded-3xl bg-pink-900 hover:bg-verdeCami/90 font-bold text-base sm:text-2xl text-zinc-50 transition-all">
                Agendar horário
              </button>
            </div>
          </div>
          <div className="flex items-end justify-center h-full">
            <Image
              alt='Foto Mari'
              src='/image/dra/2.jpeg'
              width={600}
              height={600}
              quality={100}
              priority={true}
              className="w-96 rounded-t-full shadow-2xl"
            />
          </div>
        </div>
      </section>
      <div className="w-full h-7 bg-pink-900/90 flex gap-10 py-10 px-10 justify-around uppercase">
        <div className="flex items-center justify-center gap-2 text-pink-200 font-bold text-xl">
          <Syringe className="font-extrabold" />
          <span>Lavien</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-pink-200 font-bold text-xl">
          <Syringe className="font-extrabold" />
          <span>Botox</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-pink-200 font-bold text-xl">
          <Syringe className="font-extrabold" />
          <span>Preenchimento Labial </span>
        </div>
        <div className="flex items-center justify-center gap-2 text-pink-200 font-bold text-xl">
          <Syringe className="font-extrabold" />
          <span>Fios de Sustentação</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-pink-200 font-bold text-xl">
          <Syringe className="font-extrabold" />
          <span>Alongamento de unha em acrilico</span>
        </div>

      </div>
      <section className="flex flex-col items-center h-screen w-full container mx-auto">
        <div className="flex w-full flex-col gap-5 items-center justify-center">
          <h1 className="text-3xl font-normal text-pink-700 mt-10 text-center">Clinica Estética</h1>
          <span className="text-7xl font-normal text-pink-900 flex text-center">Dra. Mariana <br />Pereira</span>
        </div>
        <div className="w-full h-full flex justify-around items-center -mt-16">
          <div className="flex items-end justify-center h-full">
            <Image
              alt='Foto Mari'
              src='/image/dra/3.jpeg'
              width={600}
              height={600}
              quality={100}
              priority={true}
              className="w-96 rounded-t-full shadow-2xl"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-center h-full">
            <span className="text-xl uppercase font-light text-pink-800 mb-5"></span>
            <span className="text-xl text-pink-800">Resultados incríveis, mantendo sua essência</span>
            <div className="mt-10">
              <button
                onClick={() =>
                  sendMensage(
                    554135516675,
                    "Olá! Vim através do site da Cami Agência Criativa."
                  )
                }
                className="shadow-xl sm:py-3 sm:px-8 px-3 py-2 rounded-3xl bg-pink-900 hover:bg-verdeCami/90 font-bold text-base sm:text-2xl text-zinc-50 transition-all">
                Agendar horário
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="flex flex-col items-center justify-between h-screen">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-normal text-pink-700 mt-10 text-center">DEPOIMENTOS</h1>
        </div>
      </section> */}
    </main>
  );
}
