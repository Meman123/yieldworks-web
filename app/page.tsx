"use client";

import CircularTextCentered from "./components/CircularText";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      
      
      <CircularTextCentered
        text="YIELDWORKS"
        
        /* Ajusta el radio del círculo */
        radius={120}
        
        /* Cuántos segundos tarda en completar 1 giro */
        duration={10}
        
        /* Sentido del giro */
        direction="counterclockwise"
        
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
      
     
    </main>
  );
}
