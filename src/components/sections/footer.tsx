import Link from "next/link";
import { PiGithubLogoBold, PiLinkedinLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full h-20 bg-gray-300 flex flex-col justify-center items-center text-black py-4">
      <div>
        <p>© {new Date().getFullYear()} Robert Lieblang</p>
      </div>

      <div className="flex items-center space-x-4 mt-2">
        <Link href="https://github.com/roblieblang">
          <PiGithubLogoBold size={25} />
        </Link>
        <Link href="https://linkedin.com/in/roblieblang">
          <PiLinkedinLogoBold size={25} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
