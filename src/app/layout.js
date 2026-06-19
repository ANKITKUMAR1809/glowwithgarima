import { Outfit, Inter } from "next/font/google";
import "./globals.css";

// Components
import Header from "./components/Header";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import FloatingSocials from "./components/FloatingSocials";
import { CurrencyProvider } from "./context/CurrencyContext";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Glow With Garima | Holistic Health & Female Fat Loss Coach",
  description: "Transform your mind, body, and soul. Expert holistic health coaching, female fat loss, thyroid reversal, PCOD management, and sustainable wellness with Garima Tiwari.",
  keywords: "holistic health coach, female fat loss, thyroid reversal, PCOD management, yoga, meditation, weight loss, wellness, Garima Tiwari",
  icons: {
    icon: "/logo.avif",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FCF9FB] text-[#251A20] font-sans">
        <CurrencyProvider>
          <Header />
          <FloatingSocials />
          <main className="flex-grow pt-32 md:pt-36">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />

          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-D9GYP8RP25"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-D9GYP8RP25');
            `}
          </Script>
        </CurrencyProvider>
      </body>
    </html>
  );
}
