import { getDiscordStatus } from "@/server/actions";
import Avatar from "@/components/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

import { config } from "@/config";
import { skills } from "@/config/skills";
import { cards } from "@/config/cards";

export default async function Home() {
  const status: string = await getDiscordStatus();

  const contacts = [
    {
      text: "Discord",
      url: "https://discord.com/users/" + config.discordId,
      icon: IconBrandDiscord,
    },
    {
      text: "GitHub",
      url: "https://github.com/" + config.githubName,
      icon: IconBrandGithub,
    },
    {
      text: "Email",
      url: "mailto:" + config.email,
      icon: IconMail,
    },
  ];

  return (
    <main className="container mx-auto">
      <Avatar discordStatus={status} />

      <h1 className="text-3xl text-center font-semibold">
        Hi, I'm {config.personal.name} 👋
      </h1>

      <div className="flex justify-center gap-4 mt-8 flex-wrap md:flex-nowrap">
        {cards.map((card) => (
          <Card className="mt-8 mx-auto xl:w-1/3" key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl text-center mt-12">Techstack</h2>

      <div className="flex justify-center gap-4 mt-8 flex-wrap md:flex-nowrap">
        {skills.map((skill) => (
          <Card className="mt-8 mx-auto xl:w-1/3" key={skill.title}>
            <CardHeader>
              <CardTitle className="text-center">{skill.title}</CardTitle>
              <CardDescription className="flex gap-2 justify-center">
                {skill.items.map((item) => (
                  <TooltipProvider key={item.name}>
                    <Tooltip>
                      <TooltipTrigger aria-label="Skill icon">
                        <item.icon />
                        <TooltipContent>{item.name}</TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl text-center mt-12">Contact</h2>

      <div className="flex justify-center gap-4 mt-8">
        {contacts.map((contact) => (
          <div key={contact.text}>
            <Link
              href={contact.url}
              className="flex gap-2 items-center"
              aria-label="Contact"
            >
              <contact.icon stroke={2} size={32} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
