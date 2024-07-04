import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="container mx-auto flex h-[650px]">
        <div className="w-full h-full flex justify-around items-center">
          <div className="w-full flex items-center justify-center">
            <Image 
              alt='Foto Mari'
              src='/image/dra/mari.png'
              width={400}
              height={400}
              quality={100}
              priority={true}
              className="w-72"
            /> 
          </div>
          <div className="w-full flex items-center justify-center">
            text
          </div>

        </div>
      </section>
    </main>
  );
}
