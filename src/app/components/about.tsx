import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="h-screen flex flex-col justify-center items-center bg-foreground-color"
    >
      <Link
        href="/#hero"
        className="transition-transform duration-200 mb-4 flame-icon"
      >
        {"\u25B2"}
      </Link>
      <h1>What about me?</h1>
      <h2>I&apos;ve worked at a couple places.</h2>
      <Link
        href="/#experience"
        className="transition-transform duration-200 flame-icon mt-4"
      >
        {"\u25BC"}
      </Link>
    </div>
  );
}
