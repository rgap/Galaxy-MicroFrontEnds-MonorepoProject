import React from 'react';
import { Link, useParams } from 'react-router-dom';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 99.99, category: 'Electronics', description: 'A high-quality electronic device' },
  { id: 2, name: 'Product 2', price: 149.99, category: 'Electronics', description: 'Another amazing electronic product' },
  { id: 3, name: 'Product 3', price: 79.99, category: 'Clothing', description: 'Comfortable and stylish clothing' },
  { id: 4, name: 'Product 4', price: 199.99, category: 'Home', description: 'Essential home item' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Product not found</h2>
        <Link to="..">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Link 
        to=".."
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          color: '#007bff',
          textDecoration: 'none'
        }}
      >
        ← Back to Catalog
      </Link>

      <div style={{ 
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1>{product.name}</h1>
        <div style={{ margin: '20px 0' }}>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
        <button
          onClick={() => {
            // Here you would typically dispatch an action to add the item to the cart
            alert('Item added to cart!');
          }}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails; 