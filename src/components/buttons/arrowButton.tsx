import Link from "next/link";

interface ArrowButtonProps {
  href: string;
  direction: string;
}

const ArrowButton = ({ href, direction }: ArrowButtonProps) => {
  return (
    <Link
      href={href}
      className="hide md:block flame-text hover:scale-200 duration-300 text-3xl"
    >
      {direction === "left" ? "\u25C0" : "\u25B6"}
    </Link>
  );
};

export default ArrowButton;
