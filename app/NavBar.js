import { useState } from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="h-20">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="ml-2 font-extrabold text-[30px] custom-gradient-text">
            TubeFetch
          </span>
        </a>
        <div className="hidden md:flex items-center gap-x-10">
          <Link href="/" className="text-white font-bold">
            Home
          </Link>
          <a href="" className="text-white font-bold">
            About
          </a>
          <a href="" className="text-white font-bold">
            Contributors
          </a>
          <a
            href="https://github.com/SirSimon162/TubeFetch"
            rel="noreferrer"
            target="__blank"
            className="text-[#08132F]"
          >
            <div className="rounded-full p-[1px] custom-icon">
              <AiFillGithub className="w-[28px] h-[28px]" />
            </div>
          </a>
        </div>

        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6 custom-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-20 left-0 right-0 z-30 h-screen flex flex-col items-center`}
        >
          <div className="flex flex-col items-center gap-y-9 pt-12">
            <Link
              href="/"
              className="block text-white font-bold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Home
            </Link>
            <a href="" className="block text-white font-bold">
              About
            </a>
            <a href="" className="block text-white font-bold">
              Contributors
            </a>
            <a
              href="https://github.com/SirSimon162/TubeFetch"
              rel="noreferrer"
              target="__blank"
              className="text-[#08132F]"
            >
              <div className="rounded-full p-[1px] custom-icon">
                <AiFillGithub className="w-[28px] h-[28px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
