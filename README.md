# Coup – Pixel-Perfect Hero Section

This project is a pixel-perfect implementation of the **Hero section** from the Feeble Frontend Developer Assignment. It focuses on clean component architecture, modern TailwindCSS practices, smooth animations, and visual fidelity to the provided Figma design.

---

## Tech Stack

- **Vite** – Fast development server and build tool
- **React** – Component-based UI development
- **TypeScript** – Type safety and improved maintainability
- **Tailwind CSS (Modern CSS-First Theming)** – Utility-first styling with `@theme` tokens
- **AOS (Animate On Scroll)** – Scroll-based entrance animations

---

## Styling Approach

This project uses the **modern Tailwind CSS theming approach** (CSS-first), instead of defining colors in `tailwind.config.ts`.

Example:

```css
@import "tailwindcss";

@theme {
  --color-primary: #007aff;
  --color-text: #1d2026;
  --color-nav: #8c97a8;
  --color-nav-hover: #1d2026;
  --color-border-secondary: #6c788f;
}
```

### Why this approach?

- Centralized design tokens
- Easier alignment with Figma variables
- Cleaner, more scalable styling
- Recommended for modern TailwindCSS projects

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PrimaryButton.tsx
│   └── SecondaryButton.tsx
├── assets/
│   ├── images (overlay, birds, badge)
├── App.tsx
├── main.tsx
└── index.css
```

The codebase is intentionally **component-driven**, readable, and easy to extend.

---

## Features Implemented

- Pixel-accurate hero layout based on Figma
- Centered pill-style navigation bar
- Animated CTA button with sliding background hover effect
- Hero badge with icon
- Decorative floating bird illustrations
- Overlay image section with scroll prompt
- Scroll-based animations using AOS
- Fully responsive layout

---

## Animations

Animations are implemented using **AOS** and CSS transforms:

- Hero badge and text fade-up
- Overlay image entrance from bottom
- Staggered bird entrance animations
- Button hover micro-interactions

All animations are intentionally subtle to match SaaS landing page standards.

---

## Responsiveness

- Desktop-first layout
- Decorative elements hidden or repositioned on smaller screens
- Flexible typography and spacing

---

## Setup Instructions

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

---

## Notes & Assumptions

- Icons and images were exported from the provided Figma design
- Decorative assets use `pointer-events-none` to avoid interaction issues
- The focus of this assignment is the **Hero section only**, as specified

---

## Live Deployment link

Live: https://feeble-frontend-assessment.vercel.app/

## Submission

This project is intended for submission as part of the **Feeble Frontend Developer Assignment**.

Required submission items:

- Public GitHub repository
- Live deployment URL
- Resume

---

Built with attention to detail, clarity, and execution excellence — in line with Feeble’s values.
