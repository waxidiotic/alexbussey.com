import type { LucideIcon } from "lucide-react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

import { GitHubLogo } from "./icons/github-logo";

type ContactChannel = "phone" | "email" | "website" | "github" | "location";

type ContactMethods = Record<
  ContactChannel,
  { value: string; icon: LucideIcon | React.ComponentType }
>;

const contactMethods: ContactMethods = {
  phone: {
    value: "(732) 735-9019",
    icon: Phone,
  },
  email: {
    value: "awbussey83@gmail.com",
    icon: Mail,
  },
  website: {
    value: "https://alexbussey.com",
    icon: Globe,
  },
  github: {
    value: "https://github.com/waxidiotic",
    icon: GitHubLogo,
  },
  location: {
    value: "Philadelphia, PA (Open to Remote)",
    icon: MapPin,
  },
};

export const ContactMethodSection = () => {
  return (
    <div className="text-right space-y-2 text-sm">
      {Object.entries(contactMethods).map(
        ([channel, { value, icon: Icon }]) => (
          <div key={channel} className="flex items-center justify-end gap-2">
            <div className="text-gray-600">
              <Icon className="w-4 h-4 " />
            </div>
            <span className="text-gray-700">{value}</span>
          </div>
        ),
      )}
    </div>
  );
};
