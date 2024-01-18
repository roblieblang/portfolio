import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";

type ProjectCardProps = {
  title: string;
  description: string;
  deployedUrl: string;
  githubUrl: string;
};

export default function ProjectCard({
  title,
  description,
  deployedUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="max-w-xs md:max-w-md rounded shadow-md px-4 py-2 mx-2 my-5 bg-gray-500 text-white">
      {title && <h3 className="font-bold md:text-2xl text-xl mb-2">{title}</h3>}
      {description && (
        <p className="md:text-lg text-base mb-2">{description}</p>
      )}
      <div className="flex justify-between items-center">
        {deployedUrl && (
          <Link href={deployedUrl} target="_blank" rel="noopener noreferrer">
            Visit App
          </Link>
        )}
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <IoLogoGithub size={30} />
          </Link>
        )}
      </div>
    </div>
  );
}
