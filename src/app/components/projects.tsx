import Link from "next/link";

export default function Projects() {
  return (
    <div
      id="projects"
      className="h-screen flex flex-col justify-center items-center"
    >
      <Link
        href="/#experience"
        className="flame-text hover:scale-200 duration-300 mb-11"
      >
        {"\u25B2"}
      </Link>
      <h1>I have done a couple projects.</h1>
      <h2>Let&apos;s talk.</h2>
    </div>
  );
}
