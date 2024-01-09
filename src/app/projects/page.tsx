import ArrowButton from "@/components/buttons/arrowButton";
import ProjectCard from "@/components/sections/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description:
        "My personal portfolio site, built with Next.js, TypeScript and Tailwind.",
      deployedUrl: "https://www.roblieblang.com/",
      gitHubUrl: "https://github.com/roblieblang/portfolio",
    },
    {
      title: "More Coming Soon!",
      description: "",
      deployedUrl: "",
      gitHubUrl: "",
    },
  ];

  return (
    <div
      id="projects"
      className="flex h-screen w-screen justify-center items-center"
    >
      <div className="flex items-center justify-between w-full max-w-screen-xl md:px-10">
        <ArrowButton direction="left" href="/experience" />
        <div className="flex flex-col mb-48">
          {projects.map((proj, index) => (
            <div key={index} className="mx-4">
              <ProjectCard
                title={proj.title}
                description={proj.description}
                deployedUrl={proj.deployedUrl}
                githubUrl={proj.gitHubUrl}
              />
            </div>
          ))}
        </div>
        <ArrowButton direction="right" href="/contact" />
      </div>
    </div>
  );
}
