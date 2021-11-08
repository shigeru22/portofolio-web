interface IProjectItem {
  name: string;
  description: string;
  icon: string;
  color: string;
  technologyIcon: {
    type: string;
    name: string;
  }[],
  longDescription: string;
  link: string;
  screenshots: {
    image: string;
    description: string;
    portrait: boolean;
  }[]
}

export default IProjectItem;