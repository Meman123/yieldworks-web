import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* Encabezados y metaetiquetas */}
      <Head>
        <title>Home</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="globals.css" />
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KFZMS6SX');
            `,
          }}
        />
      </Head>

      {/* Contenido principal */}
      <header>
        <h1 className="id">
          YieldWorks<sup>™</sup>
        </h1>
      </header>
      <div className="background"></div>
      <div className="shadow"></div>
      <main>
        <div className="div">
          <a href="/miquis.jpg" target="_self">
            <button className="modern-button">Clic Aquí</button>
          </a>
        </div>
      </main>
    </>
  );
}
