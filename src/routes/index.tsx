import { createFileRoute } from "@tanstack/react-router";

import { Globe, Mail, MapPin, Phone } from "lucide-react";

import { GitHubLogo } from "@/components/icons/github-logo";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="bg-white w-full h-full p-8 md:p-12 relative">
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-1">
              ALEX
              <br />
              BUSSEY
            </h1>
            <p className="text-sm text-gray-600 uppercase tracking-wider">
              Front-end Software Engineer
            </p>
          </div>

          <div className="text-right space-y-2 text-sm">
            <div className="flex items-center justify-end gap-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">(732) 735-9019</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">awbussey83@gmail.com</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">alexbussey.com</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <GitHubLogo />
              <span className="text-gray-700">github.com/waxidiotic</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">
                Philadelphia, Pennsylvania (Open to Remote)
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-6" />

        {/* About Me */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Front-End Engineer with over a decade of professional experience
            building scalable media and incident response platforms. Expert in
            React and TypeScript with a proven track record of leading
            large-scale framework migrations and working with robust internal
            design systems.
          </p>
        </section>

        <div className="border-t border-gray-300 my-6" />

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
            Experience
          </h2>

          <div className="space-y-6">
            <div className="flex gap-8">
              <div className="text-sm text-gray-700 whitespace-nowrap">
                2021 - Present
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Software Engineer
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  {" "}
                  PagerDuty (via acquisition of Jeli) - Remote
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">
                      Architectural Modernization:
                    </span>{" "}
                    Leading a large-scale initiative to migrate legacy Elixir
                    and Backbone.js web applications to a modern
                    React/TypeScript toolchain, improving developer ergonomics
                    and application performance.
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">
                      Infrastructure Strategy:
                    </span>{" "}
                    Standardizing frontend patterns and build processes across
                    legacy codebases to align with PagerDuty’s global
                    infrastructure standards.
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">
                      Product Continuity (Jeli):
                    </span>{" "}
                    Managed the post-acquisition transition of the Jeli incident
                    response platform, delivering core feature updates and
                    ensuring service stability during the initial five-month
                    integration phase.
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">
                      Cross-Functional Collaboration:
                    </span>{" "}
                    Partnered with product and backend teams to deconstruct
                    monolithic Elixir views into modular React components
                    without interrupting the critical incident response workflow
                    for enterprise customers.
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">
                      Incident Analysis and Response:
                    </span>{" "}
                    Engineered core user-facing features for Jeli’s incident
                    response platform within a high-velocity frontend team,
                    delivering critical tooling used by enterprise organizations
                    to manage high-stakes service outages."
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-24">
              <div className="text-sm text-gray-700 whitespace-nowrap">
                2022
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Senior Software Engineer
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  CommonBond - Remote
                </p>
                <p className="text-sm text-gray-700 mb-2 italic">
                  Note: Role ended due to company-wide layoff and subsequent
                  closure.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">
                      Authentication Architecture:
                    </span>{" "}
                    Led the initial phase of a security-critical project to
                    migrate multiple micro-frontends to a unified authentication
                    flow, delivering the technical specification and core
                    integration patterns.
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">Technical Discovery:</span>{" "}
                    Conducted deep-dive audits of legacy frontend performance,
                    identifying key bottlenecks and proposing a modernization
                    roadmap that informed the engineering team’s strategic
                    priorities.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-12">
              <div className="text-sm text-gray-700 whitespace-nowrap">
                2015 - 2021
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Software Engineer
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  JW Player - New York, NY
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Delivering Value:</span>{" "}
                    Developed core features and advertising plugins for a
                    JavaScript video player utilized by millions of end-users
                    globally, ensuring cross-browser compatibility and
                    low-latency playback.
                  </li>
                  <li className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">
                      Modernizing the Stack:
                    </span>{" "}
                    Key contributor to a multi-year strategic initiative to
                    migrate the primary customer dashboard from Angular to
                    React, resulting in a more modular codebase and faster
                    release cycles.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-300 my-6" />

        {/* Education and Expertise */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Pennsylvania State University
                </h3>
                <p className="text-sm text-gray-700">
                  Information Sciences &amp; Technology
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  University of Phoenix
                </h3>
                <p className="text-sm text-gray-700">
                  Associates of Arts in Information Technology
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
              Expertise
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Languages
                </h3>
                <p className="text-sm text-gray-700">
                  TypeScript/JavaScript, CSS
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Frameworks
                </h3>
                <p className="text-sm text-gray-700">React, Next.js, Node.js</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Tools/Testing
                </h3>
                <p className="text-sm text-gray-700">
                  Component Libraries, Vitest, GraphQL, Storybook, Cypress
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
