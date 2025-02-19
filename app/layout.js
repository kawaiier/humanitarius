import "./globals.css";

import Script from "next/script";

export const metadata = {
  title: "humanITarius",
  description: "Индивидуальное обучение веб-разработке с нуля",
  metadataBase: new URL("https://learn.kawaiier.dev"),
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "humanITarius",
    description: "Индивидуальное обучение веб-разработке с нуля",
    type: "website",
    locale: "ru_RU",
    siteName: "humanITarius",
  },
  twitter: {
    card: "summary_large_image",
    title: "humanITarius",
    description: "Индивидуальное обучение веб-разработке с нуля",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Yandex.Metrika counter */}
        <Script
          type="text/javascript"
          strategy="afterInteractive"
          src="https://mc.yandex.ru/metrika/tag.js"
        />
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(99977641, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/99977641"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </head>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "humanITarius",
              description: "Индивидуальное обучение веб-разработке с нуля",
              url: "https://learn.kawaiier.dev",
              areaServed: "RU",
              teaches: [
                "Web Development",
                "Frontend Development",
                "React",
                "JavaScript",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
