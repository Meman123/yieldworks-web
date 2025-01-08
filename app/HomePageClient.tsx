'use client'; // => Este sí se ejecuta 100% en el navegador

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Post } from '@/types';

type Props = {
  posts: Post[];
};

export default function HomePageClient({ posts }: Props) {
  const postRefs = useRef<HTMLDivElement[]>([]);

  // Efecto de animación al montar o actualizar 'posts'
  useEffect(() => {
    postRefs.current = postRefs.current.slice(0, posts.length);
    postRefs.current.forEach((post, index) => {
      if (post) {
        gsap.fromTo(
          post,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out',
          }
        );
      }
    });
  }, [posts]);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          YieldWorks memocho
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => {
                if (el) postRefs.current[index] = el;
              }}
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
