'use client'
import Image from "next/image";
import { useState } from "react";
import { sendMensage } from "./lib/actions";
import { GiSyringe, GiLips, GiNails, } from 'react-icons/gi';
import { motion } from "framer-motion";
import { CardPassos } from "./components/card-steps";
import { texts } from "./lib/textosCardsPassos";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const slides = [
  '/image/before-and-after/1.jpeg',
  '/image/before-and-after/2.jpeg',
  '/image/before-and-after/3.jpeg',
  '/image/before-and-after/4.jpeg',
  '/image/before-and-after/5.jpeg',
  '/image/before-and-after/6.jpeg',


];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-[90%] h-[400px] lg:h-[500px] 2xl:h-[600px] overflow-hidden ">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 w-full h-full  ${index === currentSlide ? "block" : "hidden"}`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
            className="w-full h-full rounded-2xl"
          />
        </motion.div>
      ))}
      <button onClick={prevSlide} className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1 rounded-full">
        <ArrowLeftIcon className="text-pink-800 size-8" />
      </button>
      <button onClick={nextSlide} className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1 rounded-full">
        <ArrowRightIcon className="text-pink-800 size-8" />
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="container mx-auto flex h-full lg:h-[620px] 2xl:h-[746px] px-5 md:px-0">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-2 items-start justify-center h-full">
            <span className="text-base md:text-xl uppercase font-light text-pink-800 mb-1 md:mb-5">Clinica estética em pinhais</span>
            <div className="text-4xl md:text-7xl font-normal text-pink-900 mb-1 md:mb-5">
              <h1>Beleza Personalizada</h1>
              <h1>com Dra. Mariana<br />Pereira</h1>
            </div>
            <span className="text-xl text-pink-800">Resultados incríveis, mantendo sua essência</span>
            <div className="mt-5 md:mt-10 w-full">
              <button
                onClick={() =>
                  sendMensage(
                    554135516675,
                    "Olá Dra. Mariana! Quero agendar o tratamento SkinPerfect."
                  )
                }
                className="hover:bg-pink-900/90 w-full mb-10 lg:mb-0 lg:w-2/3 shadow-xl md:py-3 md:px-8 px-3 py-2 rounded-3xl bg-pink-900 hover:bg-verdeCami/90 font-bold text-base sm:text-2xl text-zinc-50 transition-all">
                Agendar horário
              </button>
            </div>
          </div>
          <div className="flex items-end justify-center h-full">
            <Image
              alt='Foto Mari'
              src='/image/doctor/2.jpeg'
              width={600}
              height={600}
              quality={100}
              priority={true}
              className="w-80 sm:w-96 lg:w-[439px] rounded-t-full shadow-2xl"
            />
          </div>
        </div>
      </section>
      <div className="w-full h-full lg:h-7 bg-pink-900/90 flex gap-7 py-10 md:px-10 overflow-hidden ">

        <div className="container mx-auto flex h-full gap-5 lg:gap-10 lg:justify-around justify-center items-center uppercase flex-col lg:flex-row">
          <div className="flex items-center justify-center gap-2 text-pink-200 font-bold text-base sm:text-lg md:text-xl">
            <GiSyringe className="font-extrabold size-6 md:size-7" />
            <span>Botox</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-pink-200 font-bold text-base sm:text-lg md:text-xl">
            <GiNails className="font-extrabold size-6 md:size-7" />
            <span>Lavien</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-pink-200 font-bold text-base sm:text-lg md:text-xl">
            <GiLips className="font-extrabold size-6 md:size-7" />
            <span>Preenchimento Labial</span>
          </div>
        </div>
      </div>

      <section className="pt-16" id="method">
        <div className="container mx-auto flex flex-col text-brancoCami justify-center items-center gap-8" >
          <div className="px-3 py-2 font-bold text-3xl sm:text-5xl text-pink-900 justify-center text-center ">
            Método Skin Perfect
          </div>
          <div className="flex flex-col gap-5 justify-center items-center my-4 max-w-[950px] px-3">
            <h1 className="font-bold text-pink-900 sm:text-2xl text-lg text-center">Desenvolvi o método SkinPerfect pensando nas necessidades específicas da sua pele, trazendo resultados surpreendentes e duradouros.</h1>
            <h1 className="font-bold text-pink-900 sm:text-2xl text-lg text-center">Vou te explicar como ele funciona, passo a passo.</h1>
          </div>

          <div className="px-3">
            <motion.ul
              initial={{ opacity: 0, y: -30, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              exit='hidden'
              className="containerUl flex flex-col sm:grid sm:grid-flow-row gap-3 sm:grid-cols-2 sm:gap-4 gap-y-5 sm:py-8 sm:px-1 ">

              {texts.map((texts, index) => (
                <motion.li key={index} className='flex flex-col sm:flex-row items-center gap-4'>
                  <CardPassos
                    srcIcon={texts.srcIcon}
                    altIcon={texts.altIcon}
                    tituloCardPassos={texts.title}
                    textoCardPassos={texts.text}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-8/12 h-full text-center items-center">
            <div className="w-full items-center justify-center flex flex-col px-3" id="results">
              <p className="font-bold text-pink-900 text-lg">
                O método SkinPerfect é um tratamento completo e eficaz, feito sob medida para você que busca uma pele mais bonita e saudável.
              </p>
              <h1 className="mt-10 mb-4 font-bold text-2xl md:text-4xl text-pink-900"> Veja os resultados do antes e depois</h1>
              <SlideShow />
              <button
                onClick={() =>
                  sendMensage(
                    554135516675,
                    "Olá Dra. Mariana! Quero agendar o tratamento SkinPerfect."
                  )
                }
                className="mt-10 hover:bg-pink-900/90 w-full shadow-xl sm:py-3 sm:px-8 px-3 py-2 rounded-3xl bg-pink-900 font-bold text-lg sm:text-xl text-zinc-50 transition-all">
                Agende sua consulta e descubra como transformar sua pele com SkinPerfect!
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full h-full mt-16" id="clinic">
        <div className="flex items-center justify-center w-full px-5 md:px-0 h-[850px] gap-10 bg-center bg-cover bg-no-repeat bg-[url('/image/location/clinic.jpeg')]">
          <div className="w-full md:w-1/2 flex flex-col gap-5 text-center bg-pink-50 py-10 px-5 md:px-12 rounded-xl shadow-2xl" >
            <p className="text-lg text-pink-900">
              Muito mais que uma clínica, a Clínica da Dra. Mariana Pereira, localizada na
              <span className="font-bold"> R. Rio Solimões, 507 - Jardim Weissópolis, Pinhais - PR</span>,
              oferece um ambiente acolhedor e sofisticado. Aqui, a harmonia do design encontra a serenidade,
              criando um espaço dedicado ao seu relaxamento, autocuidado e transformação.
              Venha descobrir um local onde cada detalhe foi pensado para proporcionar uma experiência única e personalizada.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
