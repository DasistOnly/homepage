"use server";

const states = {
  online: "22A559",
  offline: "80848E",
  idle: "F0B232",
  dnd: "F23F43",
};

export async function getDiscordStatus(): Promise<string> {
  const response = await fetch(
    "https://api.lanyard.rest/v1/users/386530212936155136",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await response.json();
  const status = data?.data?.discord_status || "offline";

  return states[status as keyof typeof states];
}