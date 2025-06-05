import CartWidget from 'cart/CartWidget';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const RootLayout = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Catalog', path: '/catalog' },
    { label: 'Cart', path: '/cart' }
  ];

  return (
    <div>
      <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '1rem',
        minHeight: 'calc(100vh - 64px)'
      }}>
        <main style={{ padding: '1rem' }}>
          <Outlet />
        </main>
        <aside style={{ 
          width: '300px',
          borderLeft: '1px solid #ddd',
          padding: '1rem',
          backgroundColor: '#f8f9fa'
        }}>
          <CartWidget />
        </aside>
      </div>
    </div>
  );
};

export default RootLayout; 