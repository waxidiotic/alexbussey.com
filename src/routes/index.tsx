import { createFileRoute } from "@tanstack/react-router";

import {
  ContactMethodSection,
  EducationSection,
  ExperienceSection,
  ExpertiseSection,
  Separator,
} from "@/components";

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

          <ContactMethodSection />
        </div>

        <Separator />

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

        <Separator />

        <ExperienceSection />

        <Separator />

        {/* Education and Expertise */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <EducationSection />

          <ExpertiseSection />
        </div>
      </div>
    </div>
  );
}
