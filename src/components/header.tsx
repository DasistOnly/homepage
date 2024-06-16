"use client";

import { ModeToggle } from "./toggle-mode";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 pb-0 mb-4">
      <div className="flex items-center space-x-4">
        <a className="font-bold text-xl">Finn F.</a>
      </div>

      <div className="flex items-center space-x-4">
        <ModeToggle />
      </div>
    </header>
  );
}