export interface IProjectItemData {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  technologies: string[];
  longDescription: string;
  projectLink: string;
  screenshots: {
      image: string;
      description: string;
      portrait: boolean;
  }[];
}
