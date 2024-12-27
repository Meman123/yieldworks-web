"use client";

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.yieldworks.com.co/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                posts {
                  nodes {
                    id
                    title
                    excerpt
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            `,
          }),
        });

        const { data } = await response.json();
        setProducts(data.posts.nodes);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Galería de Productos</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img
              src={product.featuredImage?.node.sourceUrl || 'https://via.placeholder.com/150'}
              alt={product.title}
              style={{ width: '100%', height: 'auto' }}
            />
            <h3>{product.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: product.excerpt }} />
          </div>
        ))}
      </div>
    </div>
  );
}
