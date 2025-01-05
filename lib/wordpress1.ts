import { Post } from '@/types';

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://admin.yieldworks.com.co/wp-json/wp/v2/posts');
  if (!response.ok) {
    throw new Error('Error al obtener publicaciones');
  }
  return await response.json();
}
