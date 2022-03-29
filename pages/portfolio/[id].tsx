import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { HTTPStatus } from "../../utils/http";
import { IProjectItemKeyData } from "../../types/project-item";

function PortfolioDetails({ project }: InferGetServerSidePropsType<typeof getStaticProps>) {
	return (
		<div className="py-4 text-3xl text-center font-semibold text-slate-800">Portfolio details page with ID { project !== null ? project.key : "unknown" }</div>
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
