# React E-Commerce Store
 A responsive e-commerce web application built with **ReactJS** and **Tailwind CSS**, featuring:

- Product listing from a dummy API
- Full cart functionality (mini cart + cart page)
- Context API-based global state management
- Modular and reusable components


### Approach & Architecture
## State Management
React Context API handles cart state (add, remove, adjust quantity).
CartProvider wraps the entire app to expose global cart access.
cart items presist in local Stroage


## Data Fetching
Products are fetched from https://fakestoreapi.com/products.

Loading and error states are handled gracefully.

## Styling
Fully styled using Tailwind CSS.

Responsive layout using Tailwind's grid and breakpoint utilities.

Routing
Uses React Router v7+ for multi-page navigation (Home, Cart, etc.)

### Live Link
https://myshopw.netlify.app/
