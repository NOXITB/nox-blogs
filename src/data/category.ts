export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink" | "red";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Technology",
    slug: "technology",
    color: "blue",
    description:
      "Keep pace with the ever-evolving world of technology and delve into the latest advancements in software development, hardware design, cybersecurity, and more.",
  },
  {
    title: "Personal",
    slug: "personal",
    color: "green",
    description:
      "Embark on a journey of self-improvement and personal growth. Acquire valuable tips, strategies, and resources to actualize your aspirations and enhance your individuality.",
  },
  {
    title: "Coding & Programming",
    slug: "coding",
    color: "pink",
    description:
      "Unlock the world of coding and programming. Strategize, innovate, and create by diving into articles covering coding techniques, programming paradigms, and more.",
  },
  {
    title: "Home Lab",
    slug: "homelab",
    color: "red",
    description:
      "Embark on thrilling adventures of experimentation and learning. Gather travel tips, stories, and cultural insights from seasoned explorers around the world.",
  },
  {
    title: "Networking & Web",
    slug: "networking",
    color: "orange",
    description:
      "Join us on a fun journey to discover how the internet and websites work. Learn from experts about connecting computers and making the webpages you love to visit!",
}
];
