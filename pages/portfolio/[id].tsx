import { useState, useContext } from "react";
import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { Deta } from "deta";
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
import { IProjectItemDetailData } from "../../types/api/projects";
import { ValueError } from "../../types/error";

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
			<Head>
				<title>Kyutorius | Projects</title>
				<meta name="charset" content="UTF-8" />
				<meta name="description" content="Kyutorius (aka Shigeru)'s project page." />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/kyuu.svg" />
			</Head>
			<div className="w-full h-full px-8">
				{
					(status === HTTPStatus.OK && project !== null) &&
						<>
							<Head>
								<title>Kyutorius | { project.item.name }</title>
								<meta name="description" content={ `Kyutorius (aka Shigeru)'s ${ project.item.name } project details.` } />
							</Head>
							<ContentContainer backHref="/portfolio" backLabel="Portfolio" flexMode>
								<div className="space-y-2">
									<div className="flex items-center gap-x-4 2xl:gap-x-6">
										<h1 className="font-semibold text-3xl md:text-4xl 2xl:text-5xl text-light-0 dark:text-dark-100">{ project.item.name }</h1>
										<a href={ project.item.projectLink } target="_blank" rel="noreferrer">
											<div className="flex items-top gap-x-1 h-6 md:h-8">
												<SVG src={ getSimpleIconLink("jsdelivr", "github") } className="h-6 md:h-8 fill-black dark:fill-white aspect-square" />
												<ExternalLinkIcon className="h-3 md:h-4 stroke-light-0 dark:stroke-dark-100 aspect-square" />
											</div>
										</a>
									</div>
									<h2 className="font-medium text-xl 2xl:text-2xl text-light-20 dark:text-dark-80">{ project.item.description }</h2>
									<div className="flex gap-x-3 md:gap-x-4">
										{
											project.item.technologies.map(item => (
												<SVG key={ item } src={ getSimpleIconLink("jsdelivr", item) } className="h-6 md:h-8 fill-black dark:fill-white aspect-square" />
											))
										}
									</div>
								</div>
								<div className="space-y-2 md:space-y-4 2xl:space-y-8">
									<p className="text-xl 2xl:text-2xl text-light-0 dark:text-dark-100 whitespace-pre-wrap">{ project.item.longDescription }</p>
									<div className="w-full overflow-x-auto">
										<div className="flex py-2 gap-x-2 w-max">
											{
												project.item.screenshots.map((item, index) => (
													<button key={ item.description } type="button" onClick={ () => onScreenshotClick(index) }>
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
	/* the API routes aren't available during build, thus query database directly */

	if(typeof(process.env.DETA_PROJECT_KEY) === "undefined" || process.env.DETA_PROJECT_KEY === "") {
		throw new ValueError("DETA_PROJECT_KEY is not yet assigned.");
	}

	const deta = Deta(process.env.PROJECT_KEY);
	const db = deta.Base("portfolio-items");

	const fetchResult = (await db.fetch()).items as unknown as IProjectItemDetailData[];
	fetchResult.sort((a, b) => {
		const dateA: Date = typeof(a.dateAdded) === "string" ? new Date(a.dateAdded) : a.dateAdded;
		const dateB: Date = typeof(b.dateAdded) === "string" ? new Date(b.dateAdded) : b.dateAdded;

		return dateA.getTime() - dateB.getTime();
	});

	const paths = fetchResult.map(item => ({
		params: { id: item.key.toString() }
	}));

	return {
		paths,
		fallback: true
	};
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
			revalidate: 1296000
		};
	}
	catch (e) {
		if(axios.isAxiosError(e)) {
			return {
				props: {
					status: e.response !== undefined ? e.response.status : 500,
					project: null
				},
				revalidate: 86400
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
