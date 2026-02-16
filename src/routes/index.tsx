import { createFileRoute } from "@tanstack/react-router";

import { Globe, Mail, MapPin, Phone } from "lucide-react";

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
              <span className="text-gray-700"> (732) 735-9019</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">awbussey83@gmail.com</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">www.alexbussey.com</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">Philadelphia, Pennsylvania</span>
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
            My name is Alex Bussey and I have been working with web technologies
            for about 30 years. I have a passion for creating innovative and
            user-friendly web applications that solve real-world problems. I am
            always eager to learn new technologies and stay up-to-date with the
            latest trends in the industry.
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
                2023 - Present
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Software Engineer
                </h3>
                <p className="text-sm text-gray-700 mb-2">PagerDuty - Remote</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Contributed to the Jeli product for six months
                  post-acquisition by PagerDuty, ensuring seamless integration.
                  Collaborated with a team to migrate legacy frontends from
                  Elixir and Backbone to React and TypeScript. Actively
                  participated in enhancing the internal design system and
                  component library to improve user experience.
                </p>
              </div>
            </div>

            <div className="flex gap-12">
              <div className="text-sm text-gray-700 whitespace-nowrap">
                2022 - 2023
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Software Engineer
                </h3>
                <p className="text-sm text-gray-700 mb-2">Jeli - Remote</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Contributed to the frontend development of Jeli's product,
                  enhancing user experience and functionality. Played a key role
                  in modernizing and standardizing the technology stack used
                  across the company. Collaborated closely with a small team of
                  around 20 employees, fostering a strong team dynamic in a
                  startup environment.
                </p>
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
                <p className="text-sm text-gray-700 leading-relaxed">
                  Spearheaded the integration of a new authentication flow
                  across various applications, enhancing user security and
                  experience. Collaborated on the rebranding of the marketing
                  site, aligning it with the company's vision and improving user
                  engagement. Utilized frontend technologies to deliver
                  high-quality, responsive designs that meet user needs and
                  business objectives.
                </p>
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
                <p className="text-sm text-gray-700 leading-relaxed">
                  Started as a member of the support team but quickly
                  transitioned to a software engineer role, where I worked in
                  several different areas. These include working on the
                  JavaScript-based video player, advertising plugins, platform
                  interfaces and being part of a small team tasked with
                  migrating the whole user-facing application from Angular to
                  React.
                </p>
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
                <div className="text-sm text-gray-700 mb-2">2011 - 2013</div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Information Sciences & Technology
                </h3>
                <p className="text-sm text-gray-700">
                  Pennsylvania State University - State College, PA
                </p>
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-2">2008 - 2011</div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Associates of Arts - Information Technology
                </h3>
                <p className="text-sm text-gray-700">
                  University of Phoenix - Phoenix, AZ
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
                  Extremely Proficient
                </h3>
                <p className="text-sm text-gray-700">
                  React, TypeScript, CSS, Next.js
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Proficient
                </h3>
                <p className="text-sm text-gray-700">
                  Component Frameworks, APIs, GraphQL
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                  Eager to Learn
                </h3>
                <p className="text-sm text-gray-700">
                  Tanstack Start, Web Animation
                </p>
              </div>
            </div>
          </section>
        </div>

        {/*<div className="border-t border-gray-300 my-6" />*/}

        {/* Achievement and Reference */}
        {/*<div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
              Achievement
            </h2>
            <div>
              <div className="text-sm text-gray-700 mb-2">2015 - 2016</div>
              <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
                Logo Design Awards
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                International Graphic Design Awards - USA
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, cons sectetur the adipiscing elit,
                Duis avi eum irure dolor.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
              Reference
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  MICHAEL DEEMER
                </h3>
                <p className="text-xs text-gray-700 mb-2">CEO Director</p>
                <p className="text-xs text-gray-700 mb-1">P: 555-4545-5599</p>
                <p className="text-xs text-gray-700">
                  E: michaeldeemer@gmail.com
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  PAUL ANDERSON
                </h3>
                <p className="text-xs text-gray-700 mb-2">Account Manager</p>
                <p className="text-xs text-gray-700 mb-1">P: 7889-4545-5599</p>
                <p className="text-xs text-gray-700">
                  E: paulanderson@gmail.com
                </p>
              </div>
            </div>
          </section>
        </div>*/}
      </div>
    </div>
  );
}
