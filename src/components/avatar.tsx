"use client";

import Image from "next/image";

import { config } from "@/config";

export default function Avatar({ discordStatus }: { discordStatus: string }) {
  return (
    <Image
      className="rounded-full mx-auto my-4 border-4"
      src={`https://github.com/${config.githubName}.png`}
      alt="Avatar"
      style={{ borderColor: `#${discordStatus}`, padding: "2px" }}
      width={128}
      height={128}
      priority
    />
  );
}