import ArrowButton from "@/components/buttons/arrowButton";

export default function About() {
  return (
    <div id="about" className="flex h-screen justify-center items-center">
      <div className="flex items-center justify-around md:w-full lg:max-w-4xl md:max-w-screen lg:px-0 md:px-10 -mt-20">
        <div className="xl:mr-20 xl:-ml-32">
          <ArrowButton direction="left" href="/" />
        </div>
        <div className="w-full md:px-10 md:mx-10 mx-6 lg:mx-0 lg:px-10">
          <p className="font-bold md:text-xl lg:text-2xl">
            I recently graduated magna cum laude from DePaul University with a
            degree in Computer Science. While in school, I interned at two
            separate organizations as a software engineering intern.
            <br />
            <br />
            The bulk of my technical experience thus far has been with
            full-stack development. I feel most at home with{" "}
            <span className="text-blue-400">TypeScript</span>,{" "}
            <span className="text-gray-500">Next.js</span>,{" "}
            <span className="text-green-400">Express.js</span> and{" "}
            <span className="text-blue-200">Postgres</span>.
            <br />
            <br />
            Outside of programming, I play several instruments and enjoy running
            and weightlifting.
            <br />
            <br />I look forward to working with you!
          </p>
        </div>
        <div className="xl:ml-20 xl:-mr-32">
          <ArrowButton direction="right" href="/experience" />
        </div>
      </div>
    </div>
  );
}
