interface Experience {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: {
    title: string;
    description: string;
  }[];
  note?: string;
}

const experiences: Experience[] = [
  {
    company: "PagerDuty (via acquisition of Jeli)",
    title: "Software Engineer",
    location: "Remote",
    startDate: "Jul 2022",
    endDate: "Aug 2026",
    bullets: [
      {
        title: "Adoption of AI Tooling",
        description: `Part of the team responsible for driving usage of AI tooling
        throughout the organization. Created workflows and commands to automate several
        parts of the development process, including scaffolding and pull request maintenance.`,
      },
      {
        title: "Architectual Modernization",
        description: `Leading a large-scale initiative to migrate legacy Elixir
        and Backbone.js web applications to a modern
        React/TypeScript toolchain, improving developer ergonomics
        and application performance.`,
      },
      {
        title: "Infrastructure Strategy",
        description: `Standardizing frontend patterns and build processes across
        legacy codebases to align with PagerDuty’s global
        infrastructure standards.`,
      },
      {
        title: "Product Continuity (Jeli)",
        description: `Managed the post-acquisition transition of the Jeli incident
        response platform, delivering core feature updates and
        ensuring service stability during the initial five-month
        integration phase.`,
      },
      {
        title: "Cross-Functional Collaboration",
        description: `Partnered with product and backend teams to deconstruct
        monolithic Elixir views into modular React components
        without interrupting the critical incident response workflow
        for enterprise customers.`,
      },
      {
        title: "Incident Analysis and Response",
        description: `Engineered core user-facing features for Jeli’s incident
        response platform within a high-velocity frontend team,
        delivering critical tooling used by enterprise organizations
        to manage high-stakes service outages.`,
      },
    ],
  },
  {
    company: "CommonBond",
    title: "Senior Software Engineer",
    location: "Remote",
    startDate: "Jan 2022",
    endDate: "May 2022",
    note: "Role ended due to company-wide layoff and subsequent closure.",
    bullets: [
      {
        title: "Authentication Architecture",
        description: `Led the initial phase of a security-critical project to migrate
        multiple micro-frontends to a unified authentication flow, delivering the technical
        specification and core integration patterns.`,
      },
      {
        title: "Technical Discovery",
        description: `Conducted deep-dive audits of legacy frontend performance,
        identifying key bottlenecks and proposing a modernization
        roadmap that informed the engineering team’s strategic
        priorities.`,
      },
    ],
  },
  {
    company: "JW Player",
    title: "Software Engineer",
    location: "New York, NY (Remote after March 2020)",
    startDate: "Aug 2015",
    endDate: "Dec 2021",
    bullets: [
      {
        title: "Delivering Value",
        description: `Developed core features and advertising plugins for a
        JavaScript video player utilized by millions of end-users
        globally, ensuring cross-browser compatibility and
        low-latency playback.`,
      },
      {
        title: "Modernizing the Stack",
        description: `Key contributor to a multi-year strategic initiative to
        migrate the primary customer dashboard from Angular to
        React, resulting in a more modular codebase and faster
        release cycles.`,
      },
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((e) => (
          <Experience key={e.company} {...e} />
        ))}
      </div>
    </section>
  );
};

const Experience = ({
  company,
  title,
  location,
  startDate,
  endDate,
  bullets,
  note,
}: Experience) => {
  const dateString =
    startDate === endDate ? startDate : `${startDate} - ${endDate}`;

  return (
    <div className="flex">
      <div className="text-sm text-gray-700 whitespace-nowrap w-37.5">
        {dateString}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-700 mb-2">
          {company} - {location}
        </p>
        {note && (
          <p className="text-sm text-gray-700 mb-2 italic">Note: {note}</p>
        )}
        <ul className="space-y-2">
          {bullets.map((b) => (
            <li key={b.title} className="text-sm text-gray-700">
              <span className="font-semibold">{b.title}</span>: {b.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
