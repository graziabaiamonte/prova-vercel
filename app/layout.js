"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import {Poppins} from 'next/font/google';
import FooterGiallo from "./components/FooterGiallo";
import Footer from  "./components/Footer";
import Header from "./components/Header";
import Lenis from "lenis";
import Head from "next/head";
import Script from "next/script";

// import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500','600', '900'],
})


export default  function RootLayout({ children }) {
  const pathname = usePathname();
  const showFooterGiallo = pathname.includes("/Ricette") || pathname.includes("/TonnoFilolio") || pathname.includes("/TonnoLeggero") || pathname.includes("/TonnoNaturale") || pathname.includes("/TonnoOliva") || pathname.includes("/Privacy") || pathname.includes("/SanCusumano") || pathname.includes("/ChiSiamo") || pathname.includes("/Educational");
  const lenisRef = useRef(null);


  // script con cookie script (loro vogliono iubenda)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const script = document.createElement("script");
  //     script.src = "//cdn.cookie-script.com/s/7128c908ca185d5920a414700ef6768f.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  

  useEffect(() => {
    // Inizializza Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true });
    }
  }, [pathname]);


  useEffect(() => {
    // Codice per Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K34D6HK');
    `;
    document.head.appendChild(gtmScript);

    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K34D6HK"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(gtmNoscript);

    // Codice per Meta Pixel
    const metaPixelScript = document.createElement('script');
    metaPixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1144814506507966');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(metaPixelScript);

    const metaPixelNoscript = document.createElement('noscript');
    metaPixelNoscript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1144814506507966&ev=PageView&noscript=1"
      />
    `;
    document.body.appendChild(metaPixelNoscript);

    // Cleanup: rimuovi gli elementi quando il componente viene disattivato
    return () => {
      document.head.removeChild(gtmScript);
      document.body.removeChild(gtmNoscript);
      document.head.removeChild(metaPixelScript);
      document.body.removeChild(metaPixelNoscript);
    };
  }, []);


  return (
    <html lang="it"  className={inter.className}>
      <Head>
      <link rel="canonical" href="https://www.tonnoauriga.it" />

    </Head>
      <body>
        <Header />
        {children}
       {showFooterGiallo ? <FooterGiallo/> : <Footer/>}
       
          {/* Facebook Meta Pixel */}
          {/* <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1638004113497668');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1638004113497668&ev=PageView&noscript=1"
              alt="facebook pixel"
            />
          </noscript> */}


      </body>
      {/* <GoogleAnalytics gaId="GTM-K34D6HK" /> */}
    </html>
  );
}
