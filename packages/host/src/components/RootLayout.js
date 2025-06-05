import { CartProvider } from 'cart/CartContext';
import React, { lazy, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const CartWidget = lazy(() => import('cart/CartWidget'));

const RootLayout = () => {
  return (
    <CartProvider>
      <div>
        <nav style={{
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #ddd'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1600px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
              <Link to="/catalog" style={{ textDecoration: 'none', color: '#333' }}>Catalog</Link>
            </div>
          </div>
        </nav>

        <div style={{
          display: 'flex',
          maxWidth: '1600px',
          margin: '0 auto',
          minHeight: 'calc(100vh - 57px)' // Subtract navbar height
        }}>
          <main style={{ flex: 1, padding: '2rem' }}>
            <Outlet />
          </main>

          <aside style={{
            width: '400px',
            borderLeft: '1px solid #ddd',
            backgroundColor: '#fff'
          }}>
            <Suspense fallback={<div style={{ padding: '1rem' }}>Loading cart...</div>}>
              <CartWidget />
            </Suspense>
          </aside>
        </div>
      </div>
    </CartProvider>
  );
};

export default RootLayout; 