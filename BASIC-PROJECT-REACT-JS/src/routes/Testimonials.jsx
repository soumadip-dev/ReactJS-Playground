import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/Testimonials')({
  component: RouteComponent,
})

function RouteComponent() {
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: 'Jane Doe',
    },
    {
      quote: 'I highly recommend this product to everyone!',
      author: 'John Smith',
    },
    {
      quote: 'This product has completely changed my life!',
      author: 'Bob Johnson',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: '24px',
          fontStyle: 'italic',
          color: '#555',
          marginBottom: '20px',
          lineHeight: '1.5',
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        "{testimonials[currentIndex].quote}"
      </div>
      <div
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '30px',
        }}
      >
        - {testimonials[currentIndex].author}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <button
          onClick={() =>
            setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length)
          }
          style={{
            padding: '10px 20px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            ':hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          Prev
        </button>
        <button
          onClick={() =>
            setCurrentIndex((currentIndex + testimonials.length + 1) % testimonials.length)
          }
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            ':hover': {
              backgroundColor: '#45a049',
            },
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};