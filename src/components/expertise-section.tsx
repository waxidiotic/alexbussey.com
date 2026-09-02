import { Badge } from "./badge";

interface ExpertiseItem {
  title: string;
  items: string[];
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Tanstack Start"],
  },
  {
    title: "Tools/Testing",
    items: [
      "Component Libraries",
      "Vitest",
      "GraphQL",
      "Storybook",
      "Cypress",
      "RTK Query",
      "Tanstack",
      "Playwright",
    ],
  },
  {
    title: "AI",
    items: ["Claude", "GitHub Copilot"],
  },
];

export const ExpertiseSection = () => {
  return (
    <section>
      <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
        Expertise
      </h2>
      <div className="space-y-3">
        {expertiseItems.map(({ title, items }) => (
          <ExpertiseItem key={title} title={title} items={items} />
        ))}
      </div>
    </section>
  );
};

const ExpertiseItem = ({ title, items }: ExpertiseItem) => {
  return (
    <div className="space-y-2">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <div className="space-x-2 space-y-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
};
