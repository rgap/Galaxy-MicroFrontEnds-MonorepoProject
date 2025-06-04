import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const CartSummary = () => {
  const { items, getTotal } = useCart();
  const navigate = useNavigate();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = getTotal();
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div style={{
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      marginTop: '1rem'
    }}>
      <h3>Cart Summary</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Items:</span>
          <span>{totalItems}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 'bold',
          borderTop: '1px solid #ddd',
          paddingTop: '0.5rem',
          marginTop: '0.5rem'
        }}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <button
        onClick={() => navigate('/checkout')}
        disabled={items.length === 0}
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: items.length === 0 ? '#ccc' : '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: items.length === 0 ? 'not-allowed' : 'pointer',
          fontSize: '1rem'
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary; 