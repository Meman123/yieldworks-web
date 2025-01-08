'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fetchPosts } from '@/lib/wordpress1';
import { Post } from '@/types';

// Registrar los plugins
gsap.registerPlugin(ScrollTrigger);

export default async function HomePage() {
  const posts: Post[] = await fetchPosts();

  // Referencias para animar los elementos
  const titleRef = useRef<HTMLHeadingElement>(null);
  const postRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animación del título principal
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      });
    }

    // Animación de las tarjetas de las publicaciones con ScrollTrigger
    postRefs.current.forEach((post, index) => {
      if (post) {
        gsap.from(post, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: post,
            start: 'top 90%', // Cuando el elemento está al 90% de la vista
            end: 'top 60%',
            toggleActions: 'play none none reverse', // Controla las acciones (play, reverse, etc.)
          },
        });
      }
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1
          ref={titleRef}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          YieldWorks memocho
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => {
                postRefs.current[index] = el!;
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
