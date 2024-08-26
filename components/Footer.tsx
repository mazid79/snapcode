"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://www.linkedin.com/in/md-mazid-519942301/"
      >
        Linked!n &nbsp;&#129109;
      </Link>
      <Link
        href="https://mazid-portfolio.vercel.app/"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made by</span>
        <span className="pl-1 font-medium text-slate-200">Mazid</span>
      </Link>
      <Link
        href="https://github.com/mazid79"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        Github &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;