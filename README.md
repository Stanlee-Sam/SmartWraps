# SmartWraps

A colourful landing page for a small business selling precovered books to school children.

## Project Overview

SmartWraps is designed to attract parents during the back-to-school season. It features a product carousel, modals for detailed product views, and smooth animations to enhance user engagement.

## Key Features

- Colourful, kid-friendly landing page design
- Product carousel showcasing items (Swiper)
- Modal display for detailed product information (example: [src/Components/ProductsComponents/Mini.jsx](src/Components/ProductsComponents/Mini.jsx))
- Responsive layout for mobile and tablet devices
- Animated section transitions using Framer Motion

## Tech Stack

- React + Vite
- Tailwind CSS
- Swiper for carousels
- Framer Motion for animations
- react-icons for icons
- EmailJS for contact form (if configured)

Full dependencies are available in `package.json`.

## Getting Started

Prerequisites: Node.js (v16+ recommended) and npm or yarn.

Install and run locally:

```bash
npm install
npm run dev
```

Available scripts (see `package.json`):

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## Project Structure (high level)

- [src](src)
  - [App.jsx](src/App.jsx) — main app entry
  - [main.jsx](src/main.jsx) — app bootstrap
  - [index.css](src/index.css) — global styles
  - [Components](src/Components) — UI and page components
    - [Products](src/Components/Products) — product data files (Books.js, Maxi.js, Mega.js, Mini.js)
    - [ProductsComponents](src/Components/ProductsComponents) — product UI components (e.g. [Mini.jsx](src/Components/ProductsComponents/Mini.jsx))
    - [ui](src/Components/ui) — small UI primitives like `button.jsx`, `card.jsx`, `carousel.jsx`
  - [assets](src/assets) — images and product assets
- [public](public) — static assets served by Vite

## Notes & Implementation Details

- Product data is stored as JS modules in [src/Components/Products](src/Components/Products).
- The product carousel and modal behavior are implemented in the components under [src/Components/ProductsComponents](src/Components/ProductsComponents). Example: [src/Components/ProductsComponents/Mini.jsx](src/Components/ProductsComponents/Mini.jsx) uses `swiper` and a React state-driven modal for product details.
- Animations can be found via the `framer-motion` dependency; search components for usage when adding new animated sections.

## Contributing

Feel free to open issues or submit pull requests. Suggested improvements:

- Add TypeScript types for stronger guarantees
- Add unit or integration tests
- Add a LICENSE file (this repo currently has no explicit license)

## License

No license specified. Add a `LICENSE` file if you intend to make the project open source.

## Contact

If you want help running or extending this project, open an issue or reach out to the repository owner.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
