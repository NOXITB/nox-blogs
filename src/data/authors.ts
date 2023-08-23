export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Blake Maxwell",
    slug: "blake-maxwell",
    image: "./src/assets/authors/hero-alt.png",
    bio: "",
  }
];
