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
} from "@tabler/icons-react";

export default async function Home() {
  const status: string = await getDiscordStatus();
  const cards = [
    {
      title: "📝 About me",
      description:
        "Hi, I'm Finn, an 18-year-old self-taught developer from Germany. I'm passionate about web development and love to learn new things.",
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
        <Card className="mt-8 mx-auto xl:w-1/4 md:w-1/2">
          <CardHeader>
            <CardTitle className="text-center">Languages</CardTitle>
            <CardDescription className="flex gap-2 justify-center">
              <IconBrandTypescript stroke={2} />
              <IconBrandJavascript stroke={2} />
              <IconBrandCss3 stroke={2} />
              <IconBrandHtml5 stroke={2} />
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="mt-8 xl:w-1/4 mx-auto md:w-1/2">
          <CardHeader>
            <CardTitle className="text-center">
              Frameworks & Libraries
            </CardTitle>
            <CardDescription className="flex gap-2 justify-center">
              <IconBrandReact stroke={2} />
              <IconBrandNodejs stroke={2} />
              <IconBrandVue stroke={2} />
              <IconBrandNextjs stroke={2} />
              <IconBrandPnpm stroke={2} />
              <IconBrandSass stroke={2} />
              <IconBrandTailwind stroke={2} />
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="mt-8 xl:w-1/4 mx-auto md:w-1/2">
          <CardHeader>
            <CardTitle className="text-center">Databases</CardTitle>
            <CardDescription className="flex gap-2 justify-center">
              <IconBrandMongodb stroke={2} />
              <IconBrandMysql stroke={2} />
            </CardDescription>
          </CardHeader>
        </Card>
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