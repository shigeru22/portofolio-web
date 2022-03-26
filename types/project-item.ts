export interface IProjectItemData {
  name: string;
  description: string;
  icon: string;
  color: string;
  technologies: string[];
  longDescription: string;
  link: string;
  screenshots: {
      image: string;
      description: string;
      portrait: boolean;
  }[];
}
