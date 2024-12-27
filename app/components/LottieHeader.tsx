"use client"; // Asegura que este código solo se ejecuta en el cliente

export default function LottieHeader() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ animation: "fade-in 2s ease-in-out" }}>
        ¡Animación simple sin errores!
      </h1>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        h1 {
          color: #0070f3;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}
