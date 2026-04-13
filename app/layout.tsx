import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Guía de Paises",
  description: "Explora información de países del mundo: población, monedas, idiomas y más.",
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es" className="${montserrat.variable} h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-100">{children}</body>
      </html>
  );
}