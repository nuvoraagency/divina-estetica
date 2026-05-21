import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Divina Estética | Estética Integral en Pocitos",
  description: "Descubrí Divina Estética en Pocitos. Tratamientos faciales, corporales y tecnología avanzada. Piel luminosa y bienestar en un ambiente único.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans bg-divina-cream text-divina-dark selection:bg-divina-blush selection:text-divina-dark">
        {children}
      </body>
    </html>
  );
}
