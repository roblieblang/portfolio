import ProjectCard from "@/components/sections/ProjectCard";

export default function ProjectsSection() {
  const lcAnkiDesc =
    "I created a script using Python, Selenium, Beautiful Soup, and AnkiConnect that " +
    "scrapes the most popular LeetCode problems from top sites, as well as from one's own LeetCode lists, " +
    "and adds them to an Anki deck.";
  const projects = [
    {
      title: "Portfolio",
      description:
        "My personal portfolio site, built with Next.js, TypeScript and Tailwind.",
      deployedUrl: "",
      gitHubUrl: "https://github.com/roblieblang/portfolio",
    },
    {
      title: "LeetCode Anki Deck",
      description: lcAnkiDesc,
      gitHubUrl: "https://github.com/roblieblang/leetcode-anki-script",
      deployedUrl: "",
    },
    {
      title: "Luthien",
      description:
        "I built a playlist conversion application for cross-platform listening between Spotify and YouTube.",
      deployedUrl: "",
      gitHubUrl: "https://github.com/roblieblang/luthien",
    },
  ];

  return (
    <div
      id="projects"
      className="flex min-h-screen w-screen justify-center items-center mt-4"
    >
      <div className="flex items-center justify-between w-full max-w-screen-xl md:px-10">
        <div className="flex flex-col m-auto">
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
      </div>
    </div>
  );
}
