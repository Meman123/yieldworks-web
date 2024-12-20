"use client";

import { useEffect, useState } from "react";
import client from "../lib/apollo-client";
import { gql } from "@apollo/client";

// Define la interfaz para las publicaciones
interface Post {
  title: string;
  content: string;
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]); // Especifica el tipo Post[]
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query({
          query: gql`
            query {
              posts {
                nodes {
                  title
                  content
                }
              }
            }
          `,
        });

        setPosts(data?.posts?.nodes || []); // Asigna los datos al estado
      } catch (err) {
        console.error("Error fetching data:", err);
        setError((err as Error).message); // Captura el error
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando publicaciones...</p>;
  }

  if (error) {
    return <p>Error al cargar publicaciones: {error}</p>;
  }

  return (
    <div>
      <h1>Publicaciones desde WordPress</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post: Post, index: number) => ( // Especifica el tipo de post
            <li key={index}>
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay publicaciones disponibles.</p>
      )}
    </div>
  );
}
