import Image from "next/image";
import ContentContainer from "../components/content-container";
import { getSimpleIconLink } from "../utils/simple-icons";

interface ITechnologySlugs {
	id: number;
	slug: string;
	alt: string;
}

function About() {
	const technologySlugs: ITechnologySlugs[] = [
		{
			id: 1,
			slug: "php",
			alt: "PHP Icon"
		},
		{
			id: 2,
			slug: "dotnet",
			alt: ".NET icon"
		},
		{
			id: 3,
			slug: "nodedotjs",
			alt: "Node.js icon"
		},
		{
			id: 4,
			slug: "unity",
			alt: "Unity icon"
		},
		{
			id: 5,
			slug: "react",
			alt: "React icon"
		},
		{
			id: 6,
			slug: "vuedotjs",
			alt: "Vue icon"
		},
		{
			id: 7,
			slug: "github",
			alt: "GitHub icon"
		}
	];

	return (
		<div className="w-full h-full px-8">
			<ContentContainer>
				<h2 className="font-medium text-4xl leading-normal">Just a guy of nothing. Really.</h2>
				<p className="text-2xl leading-normal">
					I&apos;m Jeremy Yonathan, mostly known as my usual nickname Shigeru, Kyuu, or whatever. Currently majoring in Informatics at Universitas Multimedia Nusantara.
					<br />
					I&apos;m highly passionate in developing and learning about technology. Most commonly in .NET (C#) including Unity and WPF, and web applications using PHP and Node.js.
				</p>
				<div className="space-y-2">
					<h3 className="font-medium text-lg text-light-0">Commonly used technologies:</h3>
					<div className="flex gap-x-3 flex-wrap">
						{
							technologySlugs.map(item => (
								<div key={ item.id } className="relative h-6 aspect-square">
									<Image src={ getSimpleIconLink("jsdelivr", item.slug) } alt={ item.alt } layout="fill" className="h-6 stroke-black aspect-square" />
								</div>
							))
						}
					</div>
				</div>
			</ContentContainer>
		</div>
	);
}

export default About;
