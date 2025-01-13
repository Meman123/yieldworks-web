import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* Encabezados y metaetiquetas deben ir dentro del componente <Head> */}
      <Head>
        <title>Home</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="globals.css" />
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
        <a href="/miquis.jpg" target="_self"> <button className="modern-button">Clic Aquí</button></a>
        </div>
      </main>
    </>
  );
}
