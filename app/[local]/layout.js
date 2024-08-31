import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { languages } from "../i18n/settings";
import { dir } from "i18next";
import NavBar from "./components/Navbar/NavBar";
import Footer from './components/Footer/Footer';
import WhatsAppButton from "./components/WhatsppButton/WhatsAppButton.jsx";

export const metadata = {
  title: "ECI group",
  description: "ECI group",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ params: { local }, children }) {  
  return (
    <html lang={local} dir={dir(local)}>
      <head>
        {/* هنا يمكن وضع الكود الذي أرسلته */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10845302976"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10845302976');
            `,
          }}
        />
      </head>
      <body className="">
        <NavBar local={local} />
        {children}
        <Footer local={local} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
