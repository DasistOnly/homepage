"use client";

export default function Avatar({ discordStatus }: { discordStatus: string }) {
  return (
    <img
      className="w-32 h-32 rounded-full mx-auto my-4 border-4"
      src="https://github.com/dasistonly.png"
      style={{ borderColor: `#${discordStatus}`, padding: "2px" }}
    />
  );
}