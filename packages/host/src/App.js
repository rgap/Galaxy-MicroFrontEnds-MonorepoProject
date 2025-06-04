import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routers';

const App = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App; 