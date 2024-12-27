"use client";

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.yieldworks.com.co/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                generalSettings {
                  title
                  description
                }
              }
            `,
          }),
        });

        const { data } = await response.json();
        setMessage(`Título: ${data.generalSettings.title} | Descripción: ${data.generalSettings.description}`);
      } catch (error) {
        setMessage('Error al comunicarse con el backend.');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
}
