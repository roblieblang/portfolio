import Link from "next/link";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full h-20 bg-gray-700 flex flex-col justify-center items-center font-bold text-black py-4">
      <div>
        <p>©{new Date().getFullYear()} Robert Lieblang</p>
      </div>

      <div className="flex items-center space-x-4 mt-2">
        <Link href="https://github.com/roblieblang">
          <IoLogoGithub size={25} />
        </Link>
        <Link href="https://linkedin.com/in/roblieblang">
          <PiLinkedinLogoBold size={25} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
