import ArrowButton from "@/components/buttons/arrowButton";
import ExperienceCard from "@/components/sections/ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      company: "Paro.ai",
      title: "Software Engineer Intern",
      dates: "June 2022 - August 2022",
      bullets: [
        "Implemented highly requested features into the company's flagship Next.js application, improving satisfaction of 50k+ users by 30%",
        "Enhanced application middleware to streamline data flow between services, leveraging GraphQL for structured and efficient data querying",
        "Augmented the Heap Track API, allowing for better service integration and harvesting of user insights",
        "Automated outreach to inactive users using AWS Lambda functions, Node.js, and Courier, saving $1000’s",
        "Presented work to company executives and department heads at the end of the internship, receiving high praise",
      ],
    },
    {
      company: "iD Lab",
      title: "Software Developer",
      dates: "November 2021 - June 2022",
      bullets: [
        "Launched a medication-tracker application as part of a multi-disciplinary team, instrumental in facilitating a clinical observational cohort study with 500+ participants",
        "Constructed secure and scalable backend infrastructure using Node.js, Express.js and Postgres to manage 3K+ entries of sensitive medical data through a REST API",
        "Integrated JWT-based authentication to secure API endpoints along with Role-Based Access Control (RBAC) ensuring restricted and appropriate access to sensitive user data",
        "Transformed UX design specifications into a responsive UI, delighting the research team and study participants",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="flex min-h-screen justify-center items-center -mt-7"
    >
      <div className="flex items-center justify-between md:w-full md:max-w-screen-xl pt-20 pb-10 md:px-10">
        <ArrowButton direction="left" href="/about" />
        <div className="text-xs lg:text-xl md:text-sm md:px-4">
          {experiences.map((exp, index) => (
            <div key={index} className="my-4 mx-6">
              <ExperienceCard
                key={index}
                company={exp.company}
                title={exp.title}
                dates={exp.dates}
                bullets={exp.bullets}
              />
            </div>
          ))}
        </div>
        <ArrowButton direction="right" href="/projects" />
      </div>
    </div>
  );
}
