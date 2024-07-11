'use client'
import Image from "next/image";
import { sendMensage } from "./lib/actions";
import { Heart } from "@phosphor-icons/react";
import { GiSyringe, GiLips, GiNails, } from 'react-icons/gi';
import { motion } from "framer-motion";
import { CardPassos } from "./components/card-steps";
import { texts } from "./lib/textosCardsPassos";


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
                    "Olá! Vim através do site da Cami Agência Criativa."
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

      <section className="pt-16" id="services">
        <div className="container mx-auto flex flex-col text-brancoCami justify-center items-center gap-8" >
          <button
            onClick={() =>
              sendMensage(
                554197514990,
                "Olá! Vim através do site da Cami Agência Criativa."
              )
            }
            className="px-3 py-2 font-bold text-3xl sm:text-5xl text-pink-900 justify-center text-center ">
            Método Skin Perfect
          </button>
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
            <div className="w-full items-center justify-center flex flex-col px-3">
              {/* <h1 className="font-bold text-pink-950 text-xl sm:text-xl ">
                Resultados
              </h1> */}
              <p className="font-bold text-pink-900 text-lg">
                O método SkinPerfect é um tratamento completo e eficaz, feito sob medida para você que busca uma pele mais bonita e saudável.
              </p>
              <button
              onClick={() =>
                sendMensage(
                  554135516675,
                  "Olá Dra. Mariana! Quero agendar o tratamento SkinPerfect."
                )
              }
              className="mt-10 hover:bg-pink-900/90 w-full shadow-xl sm:py-3 sm:px-8 px-3 py-2 rounded-3xl bg-pink-900 font-bold text-lg sm:text-2xl text-zinc-50 transition-all">
              Agende sua consulta e descubra como transformar sua pele com SkinPerfect!
            </button>
               
            </div>
          </motion.div>
        </div>

      </section>





      {/* <section className="flex flex-col md:flex-row items-center h-full gap-5 w-full container mx-auto mt-20 px-5 ">

        <div className="flex items-end justify-center h-full">
          <Image
            alt='Foto Mari'
            src='/image/procedure/botox-antes-depois.jpeg'
            width={600}
            height={600}
            quality={100}
            priority={true}
            className="w-80 h-80 object-cover object-top lg:h-full lg:w-[549px] rounded-xl shadow-2xl"
          />
        </div>

        <div className="flex w-full flex-col gap-5 items-center justify-center">
          <div className="flex items-center justify-center flex-col mb-5">
            <h2 className="text-3xl md:text-5xl font-normal text-pink-800">Método</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-pink-900">Skin Perfect</h1>
          </div>
          <div className="text-center text-xl flex flex-col gap-3 max-w-[790px] text-pink-950">
            <p>
              Quer ter uma <span className="font-bold">pele perfeita?</span> Conheça o meu método <span className="font-bold">Skin Perfect </span>
              Um tratamento global da face, <span className="font-bold">desenvolvido por mim</span>, para manter a pele sempre saudável, bonita, evitar linhas de expressão e estar <span className="font-bold">sempre bem cuidada!</span>
            </p>
            <p>
              Dentro do método, cuidamos da pele com <span className="font-bold">peelings</span>, cremes para <span className="font-bold">manter a skincare em casa</span>, cápsulas para tomar,
              bioestimulador de colágeno, fios de sustentação, e claro, <span className="font-bold">linhas específicas para cada paciente</span>.
            </p>
            <p >
              O <span className="font-bold">Skin Perfect</span> foi desenvolvido com muito estudo e dedicação, por mim, especialmente pra você, que sonha em ter e manter uma pele sempre iluminada!
              <span className="flex w-full items-center justify-center mt-3 font-bold gap-3"><Heart weight="fill" className="text-pink-600 size-6" /> Gostou? </span>
            </p>
            <button
              onClick={() =>
                sendMensage(
                  554135516675,
                  "Olá Dra. Mariana! Vim através do seu site."
                )
              }
              className="mt-5 hover:bg-pink-900/90 w-full shadow-xl sm:py-3 sm:px-8 px-3 py-2 rounded-3xl bg-pink-900 font-bold text-base sm:text-2xl text-zinc-50 transition-all">
              Entre em contato e saiba mais
            </button>
          </div>
        </div>

      </section> */}

      <section className="flex flex-col items-center h-full gap-5 w-full container mx-auto py-16 md:mt-20 px-5 sm:px-0">
        <div className="flex w-full flex-col gap-5 items-center justify-center">
          <span className="text-4xl md:text-7xl font-normal text-pink-900 flex text-center">Dra. Mariana <br />Pereira</span>
        </div>
        <div className="w-full h-full flex flex-col mt-5 lg:flex-row justify-around items-center lg:-mt-16">
          <div className="flex items-end justify-center h-full">
            <Image
              alt='Foto Mari'
              src='/image/doctor/3.jpeg'
              width={600}
              height={600}
              quality={100}
              priority={true}
              className="w-80 h-80 object-cover object-top lg:h-full lg:w-96 lg:rounded-t-full lg:rounded-none rounded-full shadow-2xl"
            />
          </div>
          <div className="flex flex-col items-start justify-center h-full mt-10">
            <div className="max-w-[650px] flex flex-col gap-5 h-full justify-center">

              <span className="text-lg sm:text-xl text-pink-950 text-justify ">
                Com mais de 10 anos de experiência dedicados à arte da estética,
                Dra. Mariana Pereira é uma profissional renomada que combina paixão e expertise em seus serviços.
                Especialista em estética natural e elegante, ela é reconhecida pelo Método Skin Perfect, que promove resultados autênticos e duradouros.
                Além de seus serviços exclusivos, Dra. Mariana oferece cursos inspiradores, atendimentos personalizados e mentorias especializadas.
                Descubra a beleza que reflete sua essência única com Dra. Mariana Pereira.
              </span>

              <div className="mt-5">
                <button
                  onClick={() =>
                    sendMensage(
                      554135516675,
                      "Olá Dra. Mariana! Vim através do seu site."
                    )
                  }
                  className="hover:bg-pink-900/90 w-full shadow-xl sm:py-3 sm:px-8 px-3 py-2 rounded-3xl bg-pink-900 font-bold text-base sm:text-2xl text-zinc-50 transition-all">
                  Agendar horário
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full mt-16">
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
