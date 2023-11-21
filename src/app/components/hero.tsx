import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-cover text-center md:p-24"
    >
      <h1 className="text-5xl md:text-6xl font-bold">
        Robert Lieblang
      </h1>
      <p className="text-xl md:text-2xl text-black mt-4">
        Software Engineer
      </p>
      <button className="mt-8 py-2 px-4 bg-black text-white hover:text-black hover:bg-gray-300 rounded transition duration-300">
        <Link href="/#about">Explore</Link>
      </button>
    </div>
  );
}
