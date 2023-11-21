import Link from "next/link";

export default function Experience() {
  return (
    <div
      id="experience"
      className="h-screen flex flex-col justify-center items-center bg-text-color text-background-color"
    >
      <Link
        href="/#about"
        className="transition-transform duration-200 hover:scale-150 mb-4"
      >
        {"\u25B2"}
      </Link>
      <h1>I have a lot of experience.</h1>
      <h2>Check out some of my projects below.</h2>
      <Link
        href="/#projects"
        className="transition-transform duration-200 hover:scale-150 mt-4"
      >
        {"\u25BC"}
      </Link>
    </div>
  );
}
