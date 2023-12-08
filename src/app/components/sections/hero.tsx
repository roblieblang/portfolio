import Link from "next/link";
import DigitalPattern from "../patterns/digitalPattern";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="h-screen position-fixed flex flex-col justify-start items-center text-center mt-24 "
    >
      <h1 className="text-5xl md:text-6xl font-bold">Robert Lieblang</h1>
      <p className="text-xl md:text-2xl text-text-color mt-4">
        Software Engineer
      </p>
      <Link href="/#about">
        <button className="mt-8 py-2 px-4 rounded transition flame-text flame-button">
          Explore
        </button>
      </Link>
      {/* <DigitalPattern /> */}
    </div>
  );
}
