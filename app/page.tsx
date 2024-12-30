"use client";

import CircularTextCentered from "./components/CircularText";
import CenteredLogo from "./components/CenteredLogo";
import BackgroundVideo from "./components/BackgroundVideo";

export default function Page() {
  // El radio que usarás para el círculo
  const circleRadius = 120;

  return (
    /**
     * Contenedor principal.
     * "relative": Para posicionar el video de fondo y el resto del contenido.
     * "min-h-screen": Para ocupar toda la altura de la ventana.
     */
    <main className="relative min-h-screen">
      {/* 1) Video de fondo */}
      <BackgroundVideo src="./background.mp4" />

      {/* 2) Contenido en primer plano (z-index>fondo) */}
      <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
        {/* Contenedor relativo con tamaño 2*radius por lado */}
        <div
          style={{
            position: "relative",
            width: `${circleRadius * 2}px`,
            height: `${circleRadius * 2}px`,
          }}
        >
          {/* Texto circular “absoluto” ocupando todo el contenedor */}
          <div style={{ position: "absolute", inset: 0 }}>
            <CircularTextCentered
              text="YIELDWORKS"
              radius={circleRadius}
              duration={10}
              direction="counterclockwise"
              keepOrientation={true}
              fontSize="2rem"
              color="white"
              fontFamily="Arial, sans-serif"
            />
          </div>

          {/* Logo centrado sobre el mismo contenedor */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CenteredLogo
              src="./step.png"
              alt="Mi Empresa"
              width="200px"
              height="200px"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
