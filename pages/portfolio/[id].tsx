import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import SVG from "react-inlinesvg";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import ContentContainer from "../../components/content-container";
import Screenshot from "../../components/screenshot";
import { HTTPStatus } from "../../utils/http";
import { getSimpleIconLink } from "../../utils/simple-icons";
import { IProjectItemKeyData } from "../../types/project-item";

function PortfolioDetails({ project }: InferGetServerSidePropsType<typeof getStaticProps>) {
	/* TODO: implement null (not found) project */

	const router = useRouter();

	return (
		<div className="w-full h-full px-8">
			{
				project !== null &&
				<ContentContainer onBackClick={ () => router.push("/portfolio") }>
					<div className="space-y-2">
						<div className="flex items-center gap-x-4">
							<h1 className="font-semibold text-4xl text-light-0">{ project.item.name }</h1>
							<div className="flex items-top gap-x-1 h-6">
								<SVG src={ getSimpleIconLink("jsdelivr", "github") } className="h-6 fill-black aspect-square" />
								<ExternalLinkIcon className="h-3 stroke-light-0 aspect-square" />
							</div>
						</div>
						<h2 className="font-medium text-2xl text-light-20">{ project.item.description }</h2>
						<div className="flex gap-x-4">
							{
								project.item.technologies.map((item, index) => (
									// eslint-disable-next-line react/no-array-index-key
									<SVG key={ index } src={ getSimpleIconLink("jsdelivr", item) } className="h-6 fill-black aspect-square" />
								))
							}
						</div>
					</div>
					<div className="space-y-2">
						<p className="text-2xl text-light-0 whitespace-pre-wrap">{ project.item.longDescription }</p>
						<div className="w-full overflow-x-auto">
							<div className="flex py-2 gap-x-2 w-max">
								{
									project.item.screenshots.map((item, index) => (
										// eslint-disable-next-line react/no-array-index-key
										<Screenshot key={ index } src={ item.image } alt={ item.description } description={ item.description } priority={ index === 0 } />
									))
								}
							</div>
						</div>
					</div>
				</ContentContainer>
			}
		</div>
	);
}

async function getStaticPaths() {
	try {
		const response = await axios.get(`${ process.env.API_HOST }/projects`);
		const data = response.data.data as IProjectItemKeyData[];

		const paths = data.map(item => ({
			params: { id: item.key.toString() }
		}));

		return {
			paths,
			fallback: true
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

async function getStaticProps(context: GetStaticPropsContext) {
	try {
		const id = typeof(context.params) !== "undefined" ? context.params.id : "0";
		const response = await axios.get(`${ process.env.API_HOST }/projects/${ id }`);

		if(response.status !== HTTPStatus.OK) {
			return {
				props: {
					status: response.status,
					project: null
				},
				revalidate: 43200
			};
		}

		const data = response.data.data as IProjectItemKeyData;
		return {
			props: {
				status: HTTPStatus.OK,
				project: data
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

export { getStaticPaths, getStaticProps };
export default PortfolioDetails;
