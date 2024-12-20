"use client"; // Asegura que el componente sea del lado del cliente

import { useEffect, useState } from "react";
import client from "../lib/apollo-client";
import { gql } from "@apollo/client";

export default function Page() {
  const [posts, setPosts] = useState([]); // Maneja los datos dinámicamente en el cliente
  const [loading, setLoading] = useState(true); // Controla el estado de carga

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

        setPosts(data?.posts?.nodes || []);
      } catch (error) {
        console.error("Error fetching GraphQL data:", error);
      } finally {
        setLoading(false); // Termina el estado de carga
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando publicaciones...</p>; // Renderiza un estado de carga
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
        <p>No hay publicaciones disponibles.</p>
      )}
    </div>
