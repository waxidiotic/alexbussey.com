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

Build the site for deployment:

```bash
bun run build
```

This builds the Vite application for production.

#### Building with PDF Generation (Local Only)

To regenerate the PDF resume locally (after updating resume content):

```bash
bun run build:local
```

This command will:
1. Build the Vite application
2. Start a preview server
3. Generate a PDF of the resume using Playwright
4. Stop the preview server

The PDF will be saved to `public/alex-bussey-resume.pdf` and should be committed to git.

**Note**: PDF generation requires Playwright's browser binaries and system dependencies, so it's designed to run locally. The generated PDF is committed to the repository and deployed as a static asset.

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
- `bun run build` - Build for production (Vercel/deployment)
- `bun run build:local` - Build for production and generate PDF (local only)
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
- Navigates to the preview server (runs from `.output/public/` after build)
- Applies print-specific styling adjustments
- Generates a Letter-sized PDF with high-quality rendering

To modify PDF generation behavior, edit `scripts/generate-pdf.ts`.

### Adjusting Page Breaks

If resume content changes and the PDF page breaks occur in awkward locations, you can manually adjust them in `scripts/generate-pdf.ts`:

1. **Locate the page break logic** around line 105-150 in `generate-pdf.ts`
2. **Current implementation**: Breaks within CommonBond's bullet list (after first bullet)
   - Page 1: PagerDuty + CommonBond header + "Authentication Architecture" bullet
   - Page 2: CommonBond "Technical Discovery" bullet + JW Player + Education/Expertise
3. **To break between jobs instead of within bullets**:
   ```typescript
   // Find the job you want to break after
   const commonBondItem = experienceItems[1]; // Index 1 = second job
   
   // Insert continuation div after entire job
   continuationDiv.textContent = 'Continued on next page...';
   experienceItems[1].after(continuationDiv);
   ```
4. **To break within a different job's bullets**:
   - Change `experienceItems[1]` to the desired job index (0 = PagerDuty, 2 = JW Player)
   - Adjust `bullets[0]` to break after a different bullet (0 = first, 1 = second, etc.)
5. **Print safety**: The `paddingBottom: '0.5in'` on the continuation div ensures safe printing margins
6. **Rebuild the PDF** with `bun run build:local`

**Note**: The script uses zero-based indexing for both jobs and bullets.

### Automated PDF Update Checks

A GitHub Action automatically verifies that the PDF is updated when resume content changes:

- **What it does**: Checks if `src/routes/index.tsx` was modified in a PR
- **Enforcement**: If the resume changed but the PDF wasn't updated, the CI check fails
- **Auto-comment**: Posts instructions on the PR to run `bun run build:local`
- **Purpose**: Ensures the PDF always stays in sync with the resume content

This prevents accidentally deploying resume changes without the corresponding PDF update.

## License

MIT License - feel free to use this as inspiration for your own portfolio or take the PDF generation code for your projects!
