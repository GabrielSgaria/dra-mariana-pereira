import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
import { ButtonWhatsAppFixed } from "./components/button-whatsapp-fixed";
import logo from '../../public/image/favicon.jpeg'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clínica Dra. Mariana Pereira - Estética Avançada",
  description: "Beleza Personalizada com Dra. Mariana Pereira - Resultados incríveis, mantendo sua essência.",
  icons: "/favicon.jpeg",
  metadataBase: new URL("https://www.marianapereiradra.com.br"),
  openGraph: {
    title: "Clínica Dra. Mariana Pereira - Estética Avançada",
    description: "Beleza Personalizada com Dra. Mariana Pereira - Resultados incríveis, mantendo sua essência.",
    url: "https://www.marianapereiradra.com.br",
    siteName: "Clínica Dra. Mariana Pereira - Estética Avançada",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: 'https://sa-east-1.graphassets.com/clwqlca22006e07lv6chcfoo8/clysrmnlm0mo207kjjsc3jg27',
        width: 1250,
        height: 1250,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: [
    "clínica estética", "Dra. Mariana Pereira", "estética avançada", "botox", "lavien", "preenchimento labial",
    "método SkinPerfect", "tratamentos estéticos", "beleza personalizada", "cuidados com a pele", "bioestimulação de colágeno",
    "peeling personalizado", "lifting facial", "nutrição da pele", "resultados duradouros", "aprimoramento estético",
    "saúde da pele", "tratamentos personalizados", "rejuvenescimento", "estética facial", "tratamentos anti-idade",
    "estética em Pinhais", "autocuidado", "consultas estéticas", "estética moderna", "inovação em estética",
    "beleza natural", "tratamentos de beleza", "cuidados faciais", "experiência estética", "ambiente acolhedor",
    "design sofisticado", "experiência personalizada", "harmonia estética", "transformação estética",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={`bg-pink-50 text-zinc-900 ${inter.className}`}>
        <NavBar />        
        <ButtonWhatsAppFixed />
        {children}
        <Footer />
      </body>
    </html>
  );
}
