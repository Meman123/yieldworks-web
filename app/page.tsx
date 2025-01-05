import { fetchPosts } from '@/lib/wordpress1';
import { Post } from '@/types';

export default async function HomePage() {
  const posts: Post[] = await fetchPosts();

  return (
    <div>
      <h1>Publicaciones desde WordPress</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={post.link} target="_blank" rel="noopener noreferrer">Leer más</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
