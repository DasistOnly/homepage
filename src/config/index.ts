interface Config {
  githubName: string;
  discordId: string;
  email: string;
  birthYear: number;
  birthMonth: number;
  personal: {
    name: string;
    fullName: string
  };
  url: string;

  seo: {
    title: string;
    description: string;
  };
}

export const config: Config = {
  githubName: "dasistonly",
  discordId: "386530212936155136",
  email: "finnlucaf@icloud.com",
  birthYear: 2005,
  birthMonth: 7,
  personal: {
    name: "Finn",
    fullName: "Finn Friedrich"
  },
  url: "https://finnfriedrich.com",
  seo: {
    title: "Finn F",
    description: "Software engineer from Germany",
  }
}