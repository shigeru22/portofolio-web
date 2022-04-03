import { InferGetStaticPropsType } from "next";
import axios from "axios";
import ContentContainer from "../../components/content-container";
import ProjectItem from "../../components/project-item";
import { HTTPStatus } from "../../utils/http";
import { IProjectItemKeyData } from "../../types/project-item";

function Portfolio({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="flex flex-col flex-grow w-full h-full px-8">
			<ContentContainer>
				<div className="flex flex-col justify-center items-center w-full space-y-4 md:space-y-6">
					<h1 className="text-center font-semibold text-3xl md:text-4xl text-light-0">Portfolio</h1>
					<div className="flex md:grid flex-col grid-cols-2 gap-x-2 gap-y-2">
						{
							projects.map(project => (
								<ProjectItem key={ project.key } id={ project.key } name={ project.item.name } description={ project.item.description } iconSrc={ `/projects/${ project.item.icon }` } />
							))
						}
					</div>
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
					projects: [] as IProjectItemKeyData[]
				},
				revalidate: 43200
			};
		}

		const data = response.data.data as IProjectItemKeyData[];

		return {
			props: {
				status: HTTPStatus.OK,
				projects: data
			},
			revalidate: 43200
		};
	}
	catch (e) {
		/* TODO: handle Axios related errors */

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
