export default function AboutSection() {
  return (
    <div id="about" className="flex h-screen justify-center items-center">
      <div className="flex items-center justify-around md:w-full lg:max-w-4xl md:max-w-screen lg:px-0 md:px-10 -mt-20">
        <div className="w-full md:px-10 md:mx-10 mx-6 lg:mx-0 lg:px-10">
          <p className="font-bold md:text-xl lg:text-2xl">
            I recently graduated magna cum laude from DePaul University with a
            degree in Computer Science. While in school, I interned at two
            separate organizations as a software engineer.
            <br />
            <br />
            The bulk of my technical experience thus far has been in
            full-stack development. I am a comfortable jack-of-all-trades in search of mastery, 
            with proven skill in TypeScript/JavaScript, Python, Go, React and Tailwind.
            <br />
            <br />
            Outside of programming I play several instruments and enjoy running
            and weightlifting.
            <br />
            <br />I look forward to working with you.
          </p>
        </div>
      </div>
    </div>
  );
}
