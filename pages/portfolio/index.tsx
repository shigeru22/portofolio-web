import { InferGetStaticPropsType } from "next";
import axios from "axios";
import ContentContainer from "../../components/content-container";
import ProjectItem from "../../components/project-item";
import { HTTPStatus } from "../../utils/http";
import { IProjectItemsKeyData } from "../../types/project-item";

function Portfolio({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="w-full h-full px-8 space-y-4">
			<ContentContainer>
				<h1 className="text-center font-semibold text-4xl text-light-0">Portfolio</h1>
				<div className="flex flex-col gap-y-2">
					<ProjectItem id={ 1 } name="Latus" description="Social media made simple." iconSrc="/projects/latus.png" />
				</div>
			</ContentContainer>
		</div>
	);
}

async function getStaticProps() {
	try {
		const response = await axios.get(`${ process.env.API_HOST }/projects`);

		if(response.status !== HTTPStatus.OK) {
			return {
				props: {
					status: response.status,
					projects: [] as IProjectItemsKeyData[]
				},
				revalidate: 43200
			};
		}

		const data = response.data.data as IProjectItemsKeyData[];

		return {
			props: {
				status: HTTPStatus.OK,
				projects: data
			},
			revalidate: 43200
		};
	}
	catch (e) {
		if(e instanceof Error) {
			throw e;
		}
		else {
			throw Error("Unknown error occurred while fetching data.");
		}
	}
}

export { getStaticProps };
export default Portfolio;
