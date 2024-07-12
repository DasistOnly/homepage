interface Card {
  title: string;
  description: string;
}

import { config } from "@/config";

const age =
  new Date().getFullYear() -
  config.birthYear -
  (new Date().getMonth() >= config.birthMonth - 1 ? 0 : 1);

export const cards: Card[] = [
  {
    title: "📝 About me",
    description: `Hi, I'm ${config.personal.name}, an ${age}-year-old self-taught developer from Germany. I'm passionate about web development and love to learn new things.`,
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