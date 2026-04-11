import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Explorador de Paises",
  description: "Explora información de países del mundo: población, monedas, idiomas y más.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
      </html>
  );
}