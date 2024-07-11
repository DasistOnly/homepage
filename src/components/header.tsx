"use client";

import Link from "next/link";
import { ModeToggle } from "./toggle-mode";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 pb-0 mb-4">
      <nav className="flex items-center space-x-4">
        <Link href="/" className="font-bold text-xl">
          Finn F.
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <ModeToggle />
      </div>
    </header>
  );
}