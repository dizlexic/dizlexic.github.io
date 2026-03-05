# Project Tasklist

This tasklist details the necessary steps to build, design, and deploy the **mooresolutions.io** project according to the specifications in `instructions.md`.

## Phase 1: Project Setup & Infrastructure
- [x] Initialize Vue 3 project with static site generation (SSG) support.
- [x] Set up project directory structure (`/content/blog`, `/content/projects`).
- [x] Configure Git repository and initial `main` branch.
- [x] Set up GitHub Actions workflow for building and testing.

## Phase 2: Design & Styling
- [x] Implement a universal dark theme mimicking a Terminal/TUI.
- [x] Apply the **oh-my-zsh halflife** color scheme.
- [x] Ensure 100% responsiveness and touch-device support.
- [x] Create base layout and typography consistent with terminal design.

## Phase 3: Content & Features
- [x] Implement a Markdown parser to convert `.md` files into HTML.
    - [x] Support for embedded images.
    - [x] Support for links (internal/external).
- [x] Create demo Markdown content:
    - [x] `/content/blog/demo-post.md`: A sample post with images and links.
    - [x] `/content/projects/demo-project.md`: A sample project with images and links.
- [x] Build Vue 3 components for:
    - [x] Blog post listings and individual post pages.
    - [x] Project showcase listings and individual project pages.
    - [x] Homepage/About me section.
- [x] Develop a Python script (using PIL) to generate optimized SVG icons.
- [ ] Implement SEO best practices (meta tags, sitemap, etc.).

## Phase 4: Performance & Accessibility
- [ ] Optimize assets for speed and lightweight delivery.
- [x] Audit and fix accessibility issues (ARIA roles, semantic HTML).
- [ ] Ensure fast load times and high Lighthouse performance scores.

## Phase 5: Deployment
- [x] Configure GitHub Pages for static hosting.
- [x] Finalize GitHub Actions workflow for automated deployment.
- [ ] Configure Namecheap domain to point to Cloudflare nameservers.
- [ ] Set up Cloudflare DNS records and SSL/TLS.
- [ ] Perform end-to-end verification of the live site.

---
*Tasks based on instructions.md requirements.*
