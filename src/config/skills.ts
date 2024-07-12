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
} from "@tabler/icons-react";

interface Skill {
  name: string;
  icon: React.ComponentType;
}

interface SkillGroup {
  title: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
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