"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function Page() {
  useEffect(() => {
    // Registrar el plugin MotionPath
    gsap.registerPlugin(MotionPathPlugin);

    // Crear la animación
    gsap.to(".circle", {
      duration: 4,
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 100, y: -50 },
          { x: 200, y: 0 },
          { x: 300, y: 50 },
          { x: 400, y: 0 },
        ],
        align: "self",
        autoRotate: true, // Hace que el círculo rote siguiendo la trayectoria
      },
      repeat: -1, // La animación se repite infinitamente
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <svg width="500" height="300" style={{ overflow: "visible" }}>
        <circle
          className="circle"
          r="20"
          cx="50"
          cy="50"
          fill="#3498db"
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </main>
  );
}
