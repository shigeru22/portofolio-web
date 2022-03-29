import SVG from "react-inlinesvg";
import ContentContainer from "../components/content-container";
import { getSimpleIconLink } from "../utils/simple-icons";

interface ITechnologySlugs {
	id: number;
	slug: string;
}

function About() {
	const technologySlugs: ITechnologySlugs[] = [
		{
			id: 1,
			slug: "php"
		},
		{
			id: 2,
			slug: "dotnet"
		},
		{
			id: 3,
			slug: "nodedotjs"
		},
		{
			id: 4,
			slug: "unity"
		},
		{
			id: 5,
			slug: "react"
		},
		{
			id: 6,
			slug: "vuedotjs"
		},
		{
			id: 7,
			slug: "github"
		}
	];

	return (
		<div className="w-full h-full px-8">
			<ContentContainer>
				<h2 className="font-medium text-4xl leading-normal">Just a guy of nothing. Really.</h2>
				<p className="text-2xl text-light-0 leading-normal">
					I&apos;m Jeremy Yonathan, mostly known as my usual nickname Shigeru, Kyuu, or whatever. Currently majoring in Informatics at Universitas Multimedia Nusantara.
					<br />
					I&apos;m highly passionate in developing and learning about technology. Most commonly in .NET (C#) including Unity and WPF, and web applications using PHP and Node.js.
				</p>
				<div className="space-y-2">
					<h3 className="font-medium text-lg text-light-0">Commonly used technologies:</h3>
					<div className="flex gap-x-3 flex-wrap">
						{
							technologySlugs.map(item => (
								<div key={ item.id } className="h-6 aspect-square">
									<SVG src={ getSimpleIconLink("jsdelivr", item.slug) } className="h-6 fill-black aspect-square" />
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
