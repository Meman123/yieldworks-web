import { fetchPosts } from '@/lib/wordpress1';
import { Post } from '@/types';

export default async function HomePage() {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Publicaciones de WordPress
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {post.title.rendered}
              </h2>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 hover:text-blue-700 font-medium"
              >
                Leer más
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
