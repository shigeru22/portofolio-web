import SVG from "react-inlinesvg";
import ContentContainer from "../components/content-container";
import LanguageGraph from "../components/language-graph";
import Button from "../components/button";
import { getSimpleIconLink } from "../utils/simple-icons";
import { ILanguageGraphData } from "../types/components/language-graph";
import Config from "../config.json";

interface ITechnologySlugs {
	id: number;
	slug: string;
}

function About() {
	const technologySlugs: ITechnologySlugs[] = Config.commonTechnologies;
	const languages: ILanguageGraphData[] = Config.languages;

	return (
		<div className="w-full h-full px-8">
			<ContentContainer flexMode>
				<h2 className="font-medium text-3xl md:text-4xl text-light-0 dark:text-dark-100 leading-normal">Just a guy of nothing. Really.</h2>
				<p className="text-xl 2xl:text-2xl text-light-0 dark:text-dark-100 leading-normal whitespace-pre-wrap">
					{ Config.about.introduction }
				</p>
				<div className="space-y-2 2xl:space-y-4">
					<h3 className="font-medium text-lg md:text-xl text-light-0 dark:text-dark-100">Commonly used technologies:</h3>
					<div className="flex gap-x-3 md:gap-x-4 2xl:gap-x-6 flex-wrap">
						{
							technologySlugs.map(item => (
								<div key={ item.id } className="h-6 md:h-8 aspect-square">
									<SVG src={ getSimpleIconLink("jsdelivr", item.slug) } className="h-6 md:h-8 2xl:h-10 fill-black dark:fill-white aspect-square" />
								</div>
							))
						}
					</div>
				</div>
				<div className="space-y-2 2xl:space-y-4">
					<h3 className="font-medium text-lg md:text-xl text-light-0 dark:text-dark-100">Languages:</h3>
					<LanguageGraph data={ languages } />
				</div>
				<div className="space-y-2">
					<p className="text-xl 2xl:text-2xl text-light-0 dark:text-dark-100 leading-normal whitespace-pre-wrap">
						{ Config.about.information }
					</p>
					<p className="2xl:text-lg text-light-0 dark:text-dark-100 leading-snug whitespace-pre-wrap">
						{ Config.about.subtext }
					</p>
				</div>
				<div className="flex justify-center lg:justify-start w-full">
					<div className="flex flex-col gap-y-2">
						{
							Config.links.map(link => (
								<a key={ link.name } href={ link.link } target="_blank" rel="noreferrer">
									<Button iconSlug={ link.iconSlug } label={ link.name } />
								</a>
							))
						}
					</div>
				</div>
				<div className="flex justify-center w-full py-8">
					<SVG src="/kyuu.svg" className="h-12 fill-light-20 dark:fill-dark-80 aspect-square" />
				</div>
			</ContentContainer>
		</div>
	);
}

export default About;
