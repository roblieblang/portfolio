import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="1flex flex-col justify-center items-center"
    >
      <Link href="/" className="mb-4 hover:scale-200 duration-300 flame-text">
        {"\u25B2"}
      </Link>
      {/* make sure you've got the colors right for each span */}
      <p className="p-5 md:p-40 font-bold">
        I recently graduated from DePaul University with a degree in Computer
        Science. The bulk of my technical experience thus far has been with{" "}
        <em>full-stack development</em>. I feel at home with{" "}
        <span className="text-blue-400">TypeScript</span>,{" "}
        <span className="text-gray-500">Next.js</span>,{" "}
        <span className="text-green-400">Express.js</span> and{" "}
        <span className="text-blue-200">Postgres</span>.
        <br />
        I&apos;m working on two projects at this time, each allowing me to
        become more adept at some existing skills and develop new proficieny
        with <span className="text-blue-200">Go</span> and{" "}
        <span className="text-yellow-300">Python</span>.
      </p>
      <Link
        href="/experience"
        className="hover:scale-200 duration-300 flame-text mt-4"
      >
        {"\u25BC"}
      </Link>
    </div>
  );
}
