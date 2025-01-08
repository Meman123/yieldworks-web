// app/home/page.tsx
import { fetchPosts } from '@/lib/wordpress1';
import HomePageClient from './HomePageClient';

// *OJO*: No usamos 'use client' aquí, porque es un Server Component.
// Next.js va a ejecutar este componente en el servidor.
export default async function HomePage() {
  // Aquí sí podemos hacer peticiones con fetch, 
  // usar searchParams del server, etc.
  const posts = await fetchPosts();

  return (
    // Renderizamos un Client Component y le pasamos los datos
    <HomePageClient posts={posts} />
  );
}
