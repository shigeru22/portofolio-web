import { InferGetStaticPropsType } from "next";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import ContentContainer from "../components/content-container";

function NotFound({ message }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="flex-grow flex flex-col px-8">
			<ContentContainer backHref="/" backLabel="Home" flexMode>
				<div className="flex-grow flex justify-center items-center">
					<div className="flex flex-col justify-center gap-y-4 w-full">
						<ExclamationCircleIcon className="h-16 lg:h-24 aspect-square stroke-black dark:stroke-white" />
						<div className="flex flex-col items-center gap-y-2">
							<h1 className="font-medium text-xl md:text-2xl 2xl:text-3xl text-center text-light-0 dark:text-dark-100">{ message }</h1>
							<h2 className="md:text-lg 2xl:text-xl text-center text-light-20 dark:text-dark-80">Page not found.</h2>
						</div>
					</div>
				</div>
			</ContentContainer>
		</div>
	);
}

function getStaticProps() {
	const headings = [
		"Dunno what happened, but whatever...",
		"Is there something that I missed?",
		"Yeah, tried to look for that with nothing."
	];

	const randomNumber = Math.floor(Math.random() * (headings.length - 0.02));

	return {
		props: {
			message: headings[randomNumber]
		},
		revalidate: 86400
	};
}

export { getStaticProps };
export default NotFound;
