import React from 'react';
import { useCart } from '../hooks/useCart';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      margin: '0.5rem 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px'
    }}>
      <div style={{ flex: 2 }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.name}</h3>
        <p style={{ margin: 0, color: '#666' }}>${item.price}</p>
      </div>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        flex: 1,
        justifyContent: 'flex-end'
      }}>
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          style={{
            padding: '0.25rem 0.5rem',
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          -
        </button>
        
        <span style={{ margin: '0 0.5rem' }}>{item.quantity}</span>
        
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          style={{
            padding: '0.25rem 0.5rem',
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          +
        </button>
        
        <button
          onClick={() => removeItem(item.id)}
          style={{
            marginLeft: '1rem',
            padding: '0.25rem 0.5rem',
            border: '1px solid #ff4444',
            backgroundColor: '#fff',
            color: '#ff4444',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem; 