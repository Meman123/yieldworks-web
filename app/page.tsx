"use client";

import dynamic from "next/dynamic";

// Carga el componente de manera dinámica
const LottieHeader = dynamic(() => import("./components/LottieHeader"), { ssr: false });

export default function HomePage() {
  return (
    <main>
      <h1>Página de Inicio</h1>
      <LottieHeader />
    </main>
  );
}
