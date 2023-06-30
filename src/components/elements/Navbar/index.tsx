import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="px-4 py-6 flex items-center justify-around sticky inset-0 bg-[#1A1B2F] z-[999]">
      <Link href="#" className="font-medium text-xl">
        profile
      </Link>
      <Link href="#projects" className="font-medium text-xl">
        projects
      </Link>
      <Link
        href="https://blog.aglib.xyz"
        target="_blank"
        className="font-medium text-xl"
      >
        blogs
      </Link>
    </div>
  );
};
