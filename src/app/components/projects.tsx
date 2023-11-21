import Link from "next/link";

export default function Projects() {
  return (
    <div
      id="projects"
      className="h-screen flex flex-col justify-center items-center bg-accent-color"
    >
      <Link
        href="/#experience"
        className="transition-transform duration-200 hover:scale-150 mb-11"
      >
        {"\u25B2"}
      </Link>
      <h1>I have done a couple projects.</h1>
      <h2>Let&apos;s talk.</h2>
    </div>
  );
}
