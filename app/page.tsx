import client from '../lib/apollo-client';
import { gql } from '@apollo/client';

type Post = {
  title: string;
  content: string;
};

type PostsData = {
  posts: {
    nodes: Post[];
  };
};

export default async function Page() {
  const { data } = await client.query<PostsData>({
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
        {data.posts.nodes.map((post: Post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
