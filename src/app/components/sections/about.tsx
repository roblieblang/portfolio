import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="h-screen flex flex-col justify-center items-center"
    >
      <Link href="/#" className="mb-4 hover:scale-200 duration-300 flame-text">
        {"\u25B2"}
      </Link>
      <h1>What about me?</h1>
      <h2>I&apos;ve worked at a couple places.</h2>
      <Link href="/#experience" className="hover:scale-200 duration-300 flame-text mt-4">
        {"\u25BC"}
      </Link>
    </div>
  );
}
