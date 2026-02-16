import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { Download } from "lucide-react";

import { usePerspective } from "@/hooks";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Alex Bussey",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/logo192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/logo512.png",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const {
    resumeRef,
    handleDownloadPDF,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    isHovering,
    tilt,
  } = usePerspective();

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-linear-to-br from-gray-200 via-gray-300 to-gray-400 print:bg-white print:m-0 print:p-0">
        <div className="fixed top-6 right-6 z-10 print:hidden">
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-white hover:bg-gray-100 text-gray-900 shadow-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
        <div
          className="container mx-auto py-8 md:py-12 px-4 md:px-8 print:p-0"
          style={{ perspective: "1000px" }}
        >
          <main
            ref={resumeRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="w-full max-w-4xl mx-auto bg-white shadow-2xl md:shadow-[0_20px_60px_rgba(0,0,0,0.3)] print:shadow-none print:max-w-full print:m-0"
            style={{
              transform: isHovering
                ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.01)`
                : "rotateX(0deg) rotateY(0deg) scale(1)",
              transition: "transform 0.2s ease-out",
              transformStyle: "preserve-3d",
            }}
          >
            {children}
          </main>
        </div>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
