import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { chromium } from 'playwright';

async function generatePDF() {
  console.log('🚀 Starting PDF generation...');

  // Ensure public directory exists
  const publicDir = join(process.cwd(), 'public');
  await mkdir(publicDir, { recursive: true });

  const browser = await chromium.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage({
      viewport: { width: 1200, height: 1600 },
      deviceScaleFactor: 2, // High-quality rendering
    });

    // Navigate to the local dev server or built HTML
    // For build time, we'll use the preview server
    const url = process.env.PDF_URL || 'http://localhost:3000';
    console.log(`📄 Navigating to ${url}...`);

    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Prepare page for PDF generation
    await page.evaluate(() => {
      // Hide the download button
      const downloadBtn = document.querySelector('button');
      if (downloadBtn?.textContent?.includes('Download PDF')) {
        downloadBtn.style.display = 'none';
      }

      // Remove 3D tilt effects and shadows
      const main = document.querySelector('main');
      if (main) {
        main.style.transform = 'none';
        main.style.boxShadow = 'none';
        main.style.maxWidth = '100%';
        main.style.margin = '0';
      }

      // Remove gray background and container padding
      const body = document.body;
      body.style.background = 'white';
      body.style.margin = '0';
      body.style.padding = '0';

      const container = document.querySelector('.container');
      if (container) {
        (container as HTMLElement).style.padding = '0';
      }

      // Reduce padding on main content container to fit on fewer pages
      const mainContent = document.querySelector('.bg-white.w-full.h-full');
      if (mainContent) {
        (mainContent as HTMLElement).style.padding = '1.5rem'; // Reduced from p-8 md:p-12
      }

      // Reduce spacing between sections
      const dividers = document.querySelectorAll('.border-t');
      dividers.forEach(divider => {
        const parent = divider.parentElement;
        if (parent?.classList.contains('my-6')) {
          (parent as HTMLElement).style.margin = '0.75rem 0';
        }
      });

      // Reduce section bottom margins
      const sections = document.querySelectorAll('section.mb-8');
      sections.forEach(section => {
        (section as HTMLElement).style.marginBottom = '1rem';
      });

      // Reduce header margin
      const header = document.querySelector('.mb-8');
      if (header) {
        (header as HTMLElement).style.marginBottom = '1rem';
      }

      // Try to fit everything on one page by scaling if needed
      const rootContent = document.querySelector('.bg-white.w-full.h-full > .relative');
      if (rootContent) {
        (rootContent as HTMLElement).style.fontSize = '0.95em';
      }

      // Prevent individual experience items from breaking across pages
      const experienceItems = document.querySelectorAll('.space-y-6 > div');
      experienceItems.forEach(item => {
        (item as HTMLElement).style.pageBreakInside = 'avoid';
        (item as HTMLElement).style.breakInside = 'avoid';
      });

      // Add page break controls for sections
      const allSections = document.querySelectorAll('section');
      allSections.forEach(section => {
        (section as HTMLElement).style.pageBreakInside = 'auto'; // Allow sections to break
      });

      // Add "Continued on next page" indicator at bottom of first page
      const experienceSection = Array.from(document.querySelectorAll('section')).find(
        section => section.querySelector('h2')?.textContent?.includes('Experience')
      );

      if (experienceSection) {
        // Find the last experience item on the page that will break
        const experienceItems = experienceSection.querySelectorAll('.space-y-6 > div');

        // Add continuation text after the third experience item (CommonBond)
        if (experienceItems.length >= 3) {
          const continuationDiv = document.createElement('div');
          continuationDiv.className = 'page-continuation';
          continuationDiv.style.textAlign = 'center';
          continuationDiv.style.fontSize = '0.75rem';
          continuationDiv.style.color = '#6b7280';
          continuationDiv.style.fontStyle = 'italic';
          continuationDiv.style.marginTop = '1rem';
          continuationDiv.style.pageBreakAfter = 'avoid';
          continuationDiv.textContent = 'Continued on next page...';

          // Insert after the third item (CommonBond - 2022)
          experienceItems[2].after(continuationDiv);

          // Add page break after continuation text
          continuationDiv.style.pageBreakAfter = 'always';
          continuationDiv.style.breakAfter = 'page';

          // Add top padding to page 2 content
          if (experienceItems[3]) {
            (experienceItems[3] as HTMLElement).style.paddingTop = '2rem';
          }
        }
      }
    });

    // Generate PDF
    console.log('📝 Generating PDF...');
    const pdfPath = join(publicDir, 'alex-bussey-resume.pdf');

    await page.pdf({
      path: pdfPath,
      format: 'Letter',
      printBackground: true,
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
      },
    });

    console.log(`✅ PDF generated successfully at: ${pdfPath}`);
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

generatePDF();
