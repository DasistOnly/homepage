import { getDiscordStatus } from "@/server/actions";
import Avatar from "@/components/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandVue,
  IconBrandNextjs,
  IconBrandPnpm,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandCss3,
  IconBrandHtml5,
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

export default async function Home() {
  const status: string = await getDiscordStatus();
  const age =
    new Date().getFullYear() - 2005 - (new Date().getMonth() >= 6 ? 0 : 1);

  const cards = [
    {
      title: "📝 About me",
      description: `Hi, I'm Finn, an ${age}-year-old self-taught developer from Germany. I'm passionate about web development and love to learn new things.`,
    },
    {
      title: "🛠️ Projects",
      description:
        "I'm currently working on a few projects, including some smart home integrations. I'm always looking for new projects to work on, so feel free to reach out if you have any ideas!",
    },
    {
      title: "📚 Learning",
      description:
        "I'm currently learning the Arduino lang and Svelte. I'm excited to see what I can build with them. I'm also interested in learning more about design and UI/UX.",
    },
  ];

  const contacts = [
    {
      text: "Discord",
      url: "https://discord.com/users/386530212936155136",
      icon: IconBrandDiscord,
    },
    {
      text: "GitHub",
      url: "https://github.com/dasistonly",
      icon: IconBrandGithub,
    },
    {
      text: "Email",
      url: "mailto:finnlucaf@icloud.com",
      icon: IconMail,
    },
  ];

  const skills = [
    {
      title: "Languages",
      items: [
        {
          name: "TypeScript",
          icon: IconBrandTypescript,
        },
        {
          name: "JavaScript",
          icon: IconBrandJavascript,
        },
        { name: "CSS", icon: IconBrandCss3 },
        {
          name: "HTML",
          icon: IconBrandHtml5,
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        {
          name: "React",
          icon: IconBrandReact,
        },
        {
          name: "Node.js",
          icon: IconBrandNodejs,
        },
        {
          name: "Vue",
          icon: IconBrandVue,
        },
        {
          name: "Next.js",
          icon: IconBrandNextjs,
        },
        {
          name: "pnpm",
          icon: IconBrandPnpm,
        },
        {
          name: "Sass",
          icon: IconBrandSass,
        },
        {
          name: "Tailwind CSS",
          icon: IconBrandTailwind,
        },
      ],
    },
    {
      title: "Databases",
      items: [
        {
          name: "MongoDB",
          icon: IconBrandMongodb,
        },
        {
          name: "MySQL",
          icon: IconBrandMysql,
        },
      ],
    },
  ];

  return (
    <main className="container mx-auto">
      <Avatar discordStatus={status} />

      <h1 className="text-3xl text-center font-semibold">Hi, I'm Finn 👋</h1>

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
                      <TooltipTrigger>
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
            <a
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center"
              key={contact.text}
            >
              <contact.icon stroke={2} size={32} />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
