export interface IProjectItemData {
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

export interface IProjectItemKeyData {
  key: number;
  item: IProjectItemData;
}
