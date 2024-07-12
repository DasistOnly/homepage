"use client";

import { config } from "@/config";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center w-full h-20 bg-background">
      <p className="text-center text-md">
        &copy; {currentYear} {config.seo.title}
      </p>
    </footer>
  );
}