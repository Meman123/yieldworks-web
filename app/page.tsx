import client from '../lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
  let posts = [];

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

    posts = data?.posts?.nodes || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div>
      <h1>Publicaciones</h1>
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
  );
}
