"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <div className="text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
        {/* LinkedIn Link */}
        <Link
          className="flex items-center justify-center md:justify-start text-sm font-medium hover:text-gray-300 transition-all duration-500 ease-in-out"
          href="https://www.linkedin.com/in/md-mazid-519942301/"
        >
          <Linkedin className="mr-2 w-5 h-5" />
          Linked!n
        </Link>

        {/* Portfolio Link */}
        <Link
          href="https://mazid-portfolio.vercel.app/"
          className="flex items-center justify-center md:justify-start text-sm font-medium hover:text-gray-300 transition-all duration-500 ease-in-out"
        >
          <span className="pr-2">Made by</span>
          <span className="font-semibold text-white">Mazid</span>
        </Link>

        {/* GitHub Link */}
        <Link
          href="https://github.com/mazid79"
          className="flex items-center justify-center md:justify-start text-sm font-medium hover:text-gray-300 transition-all duration-500 ease-in-out"
        >
          <Github className="mr-2 w-5 h-5" />
          GitHub
        </Link>
      </div>
    </div>
  );
}

export default Footer;
