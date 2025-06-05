const { dependencies } = require('../package.json');

module.exports = {
  name: 'catalog',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
    './ProductList': './src/components/ProductList',
    './ProductDetails': './src/components/ProductDetails'
  },
  remotes: {
    cart: 'cart@http://localhost:3002/remoteEntry.js'
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: dependencies['react-router-dom'],
    }
  },
}; 