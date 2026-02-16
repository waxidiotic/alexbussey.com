# alexbussey.com

Personal portfolio and resume website for Alex Bussey, built with modern web technologies.

## Overview

This is a personal website that serves as both an online resume and a downloadable PDF. The site is built using [TanStack Start](https://tanstack.com/start), a full-stack React framework, and styled with [Tailwind CSS](https://tailwindcss.com/).

### Key Features

- 📄 **Interactive Resume**: Clean, professional layout displaying experience, education, and expertise
- 🎨 **Modern Design**: Responsive design with Tailwind CSS
- 📥 **PDF Generation**: Automatically generates a PDF version of the resume during the build process using Playwright
- ⚡ **Fast & Optimized**: Built with Vite and optimized for performance

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) with React 19
- **Routing**: [TanStack Router](https://tanstack.com/router) (file-based)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **PDF Generation**: [Playwright](https://playwright.dev/)
- **Runtime**: [Bun](https://bun.sh/)
- **Linting/Formatting**: [Biome](https://biomejs.dev/)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.3.9 or later

### Installation

```bash
bun install
```

### Development

Run the development server:

```bash
bun dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

Build the site and generate the PDF resume:

```bash
bun run build
```

This command will:
1. Build the Vite application
2. Start a preview server
3. Generate a PDF of the resume using Playwright
4. Stop the preview server

The PDF will be saved to `public/alex-bussey-resume.pdf`.

### Preview Production Build

```bash
bun run preview
```

## Project Structure

```
alexbussey.com/
├── src/
│   ├── routes/
│   │   ├── __root.tsx      # Root layout
│   │   └── index.tsx       # Resume page
│   └── styles.css          # Global styles
├── scripts/
│   └── generate-pdf.ts     # PDF generation script
├── public/                 # Static assets (including generated PDF)
└── package.json
```

## Scripts

- `bun dev` - Start development server on port 3000
- `bun run build` - Build for production and generate PDF
- `bun run build:vite` - Build Vite application only
- `bun run build:pdf` - Generate PDF only
- `bun run preview` - Preview production build
- `bun run test` - Run Vitest tests
- `bun run lint` - Lint code with Biome
- `bun run format` - Format code with Biome
- `bun run check` - Run Biome checks

## PDF Generation

The PDF is automatically generated during the build process using Playwright. The script:

- Launches a headless Chromium browser
- Navigates to the preview server
- Applies print-specific styling adjustments
- Generates a Letter-sized PDF with high-quality rendering

To modify PDF generation behavior, edit `scripts/generate-pdf.ts`.

## License

MIT License - feel free to use this as inspiration for your own portfolio or take the PDF generation code for your projects!
