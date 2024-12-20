import client from '../lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
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

  return (
    <div>
      <h1>Publicaciones desde WordPress</h1>
      <ul>
        {data.posts.nodes.map((post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
