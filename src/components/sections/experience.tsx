import ExperienceCard from "@/components/sections/ExperienceCard";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Paro.ai",
      title: "Software Engineer Intern",
      dates: "June 2022 - August 2022",
      bullets: [
        "Deployed critical features into Paro’s flagship Next.js web application, improving satisfaction of 50k+ users by 8%",
        "Automated outreach to inactive users using AWS Lambda functions, Node.js, and Courier, saving $11,500 per year",
        "Presented work to company executives and department heads at the end of the internship, receiving high praise",
        "Enhanced application middleware to streamline data flow between services, leveraging GraphQL for structured and efficient data querying",
        "Augmented the Heap Track API for better service integration and harvesting of user insights, reducing user churn by 10%",
      ],
    },
    {
      company: "iD Lab",
      title: "Software Engineer",
      dates: "November 2021 - June 2022",
      bullets: [
        "Launched a medication-tracker application as part of a multi-disciplinary team, instrumental in facilitating a clinical observational cohort study with 500+ participants",
        "Constructed secure and scalable backend infrastructure using Node.js, Express.js and Postgres to manage 3K+ entries of sensitive medical data through a REST API",
        "Integrated JWT-based authentication to secure API endpoints along with Role-Based Access Control (RBAC) ensuring restricted and appropriate access to sensitive user data",
        "Translated UX design specifications into a responsive UI, delighting the research team and study participants",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="flex min-h-screen justify-center items-center text-black"
    >
      <div className="flex items-center justify-between md:w-full md:max-w-screen-xl pt-6 pb-6 md:px-10 bg-gray-300">
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
      </div>
    </div>
  );
}
