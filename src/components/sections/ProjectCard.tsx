import Link from "next/link";
import { PiGithubLogoBold } from "react-icons/pi";

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
    <div className="max-w-xs md:max-w-md rounded shadow-md p-5 m-5 py-8 bg-gray-500 text-white">
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
            <PiGithubLogoBold size={30} />
          </Link>
        )}
      </div>
    </div>
  );
}
