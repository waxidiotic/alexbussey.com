interface Education {
  schoolName: string;
  description: string;
}

const educations: Education[] = [
  {
    schoolName: "Pennsylvania State University",
    description: "Information Sciences & Technology",
  },
  {
    schoolName: "University of Phoenix",
    description: "Associates of Arts in Information Technology",
  },
];

export const EducationSection = () => {
  return (
    <section>
      <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
        Education
      </h2>
      <div className="space-y-4">
        {educations.map(({ schoolName, description }) => (
          <Education
            key={schoolName}
            schoolName={schoolName}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

const Education = ({ schoolName, description }: Education) => {
  return (
    <div>
      <h3 className="font-bold text-gray-900 uppercase text-sm mb-1">
        {schoolName}
      </h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};
