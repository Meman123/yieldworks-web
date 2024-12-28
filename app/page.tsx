"use client";

import CircularTextCentered from "./components/CircularText";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-white text-2xl mb-6">Texto circular con tipografía personalizada</h1>
      
      <CircularTextCentered
        text="YIELD WORKS 2024"
        
        /* Ajusta el radio del círculo */
        radius={120}
        
        /* Cuántos segundos tarda en completar 1 giro */
        duration={10}
        
        /* Sentido del giro */
        direction="clockwise"
        
        /* Si las letras se mantienen orientadas al usuario */
        keepOrientation={true}
        
        /* --- NUEVAS PROPS DE TIPOGRAFÍA --- */
        
        /* Tamaño de fuente, por ejemplo "2rem", "24px" */
        fontSize="1.8rem"
        
        /* Color del texto (cualquier color CSS válido) */
        color="#FFEB3B"
        
        /* Tipo de fuente */
        fontFamily="Arial, sans-serif"
      />
      
      <p className="text-white text-sm mt-6 text-center max-w-md">
        <strong>Parámetros:</strong><br/>
        <code>text</code>, <code>radius</code>, <code>duration</code>, 
        <code>direction</code>, <code>keepOrientation</code>, 
        <code>fontSize</code>, <code>color</code>, <code>fontFamily</code>.
      </p>
    </main>
  );
}
