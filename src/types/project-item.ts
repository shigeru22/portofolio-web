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
  screenshots: {
    image: string;
    description: string;
  }[]
}

export default IProjectItem;