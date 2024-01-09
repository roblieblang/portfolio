import Image from "next/image";

type ExperienceCardProps = {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
};

export default function ExperienceCard({
  company,
  title,
  dates,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <h3 className="font-bold">{company}</h3>
        <h4 className="font-semibold">{title}</h4>
        <p>{dates}</p>
        <ul className="list-disc pl-5">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
