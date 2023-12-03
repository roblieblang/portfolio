import Link from "next/link";

export default function Experience() {
  return (
    <div
      id="experience"
      className="h-screen flex flex-col justify-center items-center"
    >
      <Link
        href="/#about"
        className="flame-text hover:scale-200 duration-300 mb-4"
      >
        {"\u25B2"}
      </Link>
      <h1>I have a lot of experience.</h1>
      <h2>Check out some of my projects below.</h2>
      <Link
        href="/#projects"
        className="flame-text hover:scale-200 duration-300 mt-4"
      >
        {"\u25BC"}
      </Link>
    </div>
  );
}
