import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mount = () => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

// Mount immediately if we're running in standalone mode
if (process.env.NODE_ENV === 'development') {
  mount();
}

// Export mount function for container app
export { mount };
