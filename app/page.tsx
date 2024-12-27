"use client"; // Aseguramos que todo esto sea del cliente

import LottieHeader from "./components/LottieHeader";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bienvenido a YieldWorks</h1>
      <p>Prueba de animación Lottie con Next.js.</p>
      <LottieHeader />
    </div>
  );
}
