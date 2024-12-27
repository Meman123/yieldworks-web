"use client";

import { Player } from '@lottiefiles/react-lottie-player';

export default function LottieHeader() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Player
        autoplay
        loop
        src="/lottie-lego.json" // Ruta al archivo JSON en la carpeta public
        style={{ height: '300px', width: '300px' }}
      />
      <h1 style={{ fontSize: '24px', marginTop: '20px' }}>¡Bienvenido a YieldWorks!</h1>
    </div>
  );
}
