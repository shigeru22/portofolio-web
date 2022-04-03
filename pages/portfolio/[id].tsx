import { useState, useContext } from "react";
import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import axios from "axios";
import SVG from "react-inlinesvg";
import { EmojiSadIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import ContentContainer from "../../components/content-container";
import Screenshot from "../../components/screenshot";
import ScreenshotModal from "../../components/screenshot-modal";
import Button from "../../components/button";
import { HTTPStatus } from "../../utils/http";
import { getSimpleIconLink } from "../../utils/simple-icons";
import { context } from "../_app";
import { IProjectItemKeyData } from "../../types/project-item";
import { TargetComponent } from "../../types/context";

function PortfolioDetails({ status, project }: InferGetServerSidePropsType<typeof getStaticProps>) {
	/* TODO: implement null (not found) project */

	const { navbarProps, setNavbarProps } = useContext(context);
	const [ activeScreenshotIndex, setActiveScreenshotIndex ] = useState(0);

	function onScreenshotClick(screenshotId: number) {
		setActiveScreenshotIndex(screenshotId);
		toggleScreenshotModal(true);
	}

	function toggleScreenshotModal(target: boolean) {
		const temp = {
			isDialogOpened: target,
			target: !navbarProps.isDialogOpened ? TargetComponent.Screenshot : TargetComponent.None,
			onCloseClick: navbarProps.onCloseClick
		};

		setNavbarProps(temp);
	}

	function changeScreenshot(targetScreenshotId: number) {
		setActiveScreenshotIndex(targetScreenshotId);
	}

	return (
		<>
			<div className="flex flex-col flex-grow w-full px-8">
				{
					(status === HTTPStatus.OK && project !== null) &&
					<>
						<ContentContainer backHref="/portfolio" backLabel="Portfolio">
							<div className="space-y-2">
								<div className="flex items-center gap-x-4">
									<h1 className="font-semibold text-3xl text-light-0">{ project.item.name }</h1>
									<a href={ project.item.projectLink } target="_blank" rel="noreferrer">
										<div className="flex items-top gap-x-1 h-6">
											<SVG src={ getSimpleIconLink("jsdelivr", "github") } className="h-6 fill-black aspect-square" />
											<ExternalLinkIcon className="h-3 stroke-light-0 aspect-square" />
										</div>
									</a>
								</div>
								<h2 className="font-medium text-xl text-light-20">{ project.item.description }</h2>
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
								<p className="text-xl text-light-0 whitespace-pre-wrap">{ project.item.longDescription }</p>
								<div className="w-full overflow-x-auto">
									<div className="flex py-2 gap-x-2 w-max">
										{
											project.item.screenshots.map((item, index) => (
											// eslint-disable-next-line react/no-array-index-key
												<button key={ index } type="button" onClick={ () => onScreenshotClick(index) }>
													<Screenshot src={ item.image } alt={ item.description } priority={ index === 0 } />
												</button>
											))
										}
									</div>
								</div>
							</div>
						</ContentContainer>
						<ScreenshotModal
							src={ project.item.screenshots[activeScreenshotIndex].image }
							alt={ project.item.screenshots[activeScreenshotIndex].description }
							description={ project.item.screenshots[activeScreenshotIndex].description }
							currentIndex={ activeScreenshotIndex }
							maxIndex={ project.item.screenshots.length }
							onArrowClick={ changeScreenshot } />
					</>
				}
				{
					(status !== HTTPStatus.OK) &&
					<>
						<ContentContainer flexMode>
							<div className="flex justify-center items-center flex-grow w-full">
								<div className="flex flex-col justify-center items-center gap-y-4">
									<EmojiSadIcon className="h-16 aspect-square stroke-1 stroke-light-0" />
									<h3 className="font-medium text-2xl text-light-0">
										{
											status === HTTPStatus.NOT_FOUND
												? "Item not found."
												: "Data error occurred."
										}
									</h3>
									<Link href="/" passHref>
										<div className="h-16">
											<Button iconSlug="/kyuu.svg" iconSource="url" label="Home" />
										</div>
									</Link>
								</div>
							</div>
						</ContentContainer>
					</>
				}
			</div>
		</>
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

		if(axios.isAxiosError(e)) {
			return {
				props: {
					status: e.response !== undefined ? e.response.status : 500,
					project: null
				},
				revalidate: 43200
			};
		}
		else if(e instanceof Error) {
			throw e;
		}
		else {
			throw Error("Unknown error occurred while fetching data.");
		}
	}
}

export { getStaticPaths, getStaticProps };
export default PortfolioDetails;
