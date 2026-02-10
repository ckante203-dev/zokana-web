import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../lib/CartContext";
import Header from "../components/Header";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zokana - Pur Jus de Canne",
  description: "Découvrez nos jus de canne pressés à froid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}>
        {/* Chargement du SDK CinetPay avec la stratégie optimale */}
        <Script 
          src="https://checkout.cinetpay.com/sdk/v1/sdk.cinetpay.js" 
          strategy="afterInteractive" 
        />

        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}