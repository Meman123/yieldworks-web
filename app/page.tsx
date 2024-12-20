"use client";

import { useEffect, useState } from "react";
import client from "../lib/apollo-client";
import { gql } from "@apollo/client";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

        setPosts(data?.posts?.nodes || []); // Maneja el caso de datos vacíos
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message); // Captura el error para mostrarlo
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
          {posts.map((post, index) => (
            <li key={index}>
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay publicaciones disponibles.</p> // Mensaje para datos vacíos
      )}
    </div>
  );
}
