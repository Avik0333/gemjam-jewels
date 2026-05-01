# Project Graph

Generated from local imports in `src` and root config files.

```mermaid
flowchart TD
  index["index.html"] --> main["src/main.jsx"]
  main --> app["src/App.jsx"]
  main --> indexCss["src/index.css"]
  main --> theme["src/context/ThemeContext.jsx"]
  main --> browserRouter["react-router-dom: BrowserRouter"]

  app --> navbar["src/components/Navbar.jsx"]
  app --> hero["src/components/Hero.jsx"]
  app --> categories["src/components/Categories.jsx"]
  app --> videoStrip["src/components/VideoStrip.jsx"]
  app --> productGrid["src/components/ProductGrid.jsx"]
  app --> carousel["src/components/Carousel.jsx"]
  app --> footer["src/components/Footer.jsx"]

  navbar --> theme
  navbar --> logo["src/assets/logo.png"]
  navbar --> portal["react-dom: createPortal"]
  navbar --> icons["lucide-react"]

  hero --> icons
  categories --> link["react-router-dom: Link"]

  uiButton["src/components/ui/button.jsx"] --> utils["src/lib/utils.js"]
  uiButton --> cva["class-variance-authority"]
  uiButton --> slot["radix-ui: Slot"]
  utils --> clsx["clsx"]
  utils --> twMerge["tailwind-merge"]
```

## Main Render Flow

`index.html` mounts `src/main.jsx`, which wraps `src/App.jsx` in `ThemeProvider` and `BrowserRouter`.

`src/App.jsx` renders the page in this order:

1. `Navbar`
2. `Hero`
3. `Categories`
4. `VideoStrip`
5. `ProductGrid`
6. `Carousel`
7. `Footer`

## Not Currently Imported

These files exist in `src` but are not reached from the current import graph:

- `src/App.css`
- `src/assets/hero.png`
- `src/assets/react.svg`
- `src/assets/vite.svg`
- `src/components/Test.jsx`
- `src/components/VideoGrid.jsx`
- `src/components/ui/button.jsx`
- `src/components/ui/dialog.jsx`

## Root Tooling

```mermaid
flowchart TD
  vite["vite.config.js"] --> viteCore["vite"]
  vite --> reactPlugin["@vitejs/plugin-react"]
  vite --> tailwindPlugin["@tailwindcss/vite"]
  vite --> nodePath["node:path"]
```
