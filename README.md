# Microfrontend Monorepo Demo

This is a proof of concept (POC) for a microfrontend architecture using Module Federation and Single-spa.

## Applications

🧭 **Shell App (Host)** - Port 3000
- Main application shell with layout, navbar, and routing
- Tech: React + Router

🧩 **Remote Apps**:

📦 **Catalog** - Port 3001
- Product listing and details
- Features: Product UI + Filters

🛒 **Cart** - Port 3002
- Shopping cart management
- Features: Cart view + Quantity updates

💳 **Checkout** - Port 3003
- Order processing
- Features: Shipping & payment info collection

## Installation

```bash
# Install pnpm globally if not installed
npm install --global pnpm

# Install dependencies
pnpm install
```

## Running the Applications

Run all applications in parallel:
```bash
pnpm start
```

This will start:
- Shell App: [http://localhost:3000](http://localhost:3000)
- Catalog: [http://localhost:3001](http://localhost:3001)
- Cart: [http://localhost:3002](http://localhost:3002)
- Checkout: [http://localhost:3003](http://localhost:3003)

## Architecture

This project demonstrates:
- Module Federation for component sharing
- Single-spa for application lifecycle management
- React for UI components
- Webpack 5 for bundling and federation 