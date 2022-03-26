import type { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";
import { HTTPStatus, HTTPMethod } from "../../utils/http";
import { LogSeverity, log } from "../../utils/log";
import { isEnvironmentKeyEqual } from "../../utils/key";
import { IMessageData } from "../../types/api/message";
import { IInitPOSTData } from "../../types/api/init";
import { IProjectItemDetailData } from "../../types/api/projects";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IMessageData>) {
	if(req.method !== HTTPMethod.POST) {
		const data: IMessageData = {
			message: "The requested method is not allowed."
		};

		res.status(HTTPStatus.METHOD_NOT_ALLOWED).json(data);
		return;
	}

	if(typeof(process.env.DETA_PROJECT_KEY) === "undefined" || process.env.DETA_PROJECT_KEY === "") {
		const data: IMessageData = {
			message: "Project key is not yet assigned."
		};

		res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(data);
		return;
	}

	const body = req.body as IInitPOSTData;
	if(!validatePostData(body)) {
		const data: IMessageData = {
			message: "Invalid POST data."
		};

		res.status(HTTPStatus.BAD_REQUEST).json(data);
		return;
	}

	if(!isEnvironmentKeyEqual(body.key)) {
		const data: IMessageData = {
			message: "Invalid POST data."
		};

		log(LogSeverity.WARN, "init/handler", "Invalid key provided.");
		res.status(HTTPStatus.BAD_REQUEST).json(data);
		return;
	}

	const deta = Deta(body.key);
	const db = deta.Base("portfolio-items");

	try {
		const item: IProjectItemDetailData = {
			name: "Test",
			description: "Item example.",
			icon: "test.png",
			color: "#63569D",
			technologies: [
				"nodedotjs"
			],
			longDescription: "A very long example for Test item.",
			projectLink: "https://github.com/example/example",
			screenshots: [
				{
					image: "screenshots/test.jpg",
					description: "Test page",
					portrait: false
				}
			],
			dateAdded: new Date()
		};

		await db.put({
			name: item.name,
			description: item.description,
			icon: item.icon,
			color: item.color,
			technologies: item.technologies,
			longDescription: item.longDescription,
			projectLink: item.projectLink,
			screenshots: item.screenshots,
			dateAdded: typeof(item.dateAdded) === "string" ? item.dateAdded : item.dateAdded.toISOString()
		});

		const data: IMessageData = {
			message: "Sample data insertion success. Check Deta Base GUI for inserted data."
		};

		res.status(HTTPStatus.OK).json(data);
	}
	catch (e) {
		if(e instanceof Error) {
			log(LogSeverity.ERROR, "init/handler", `${ e.name }: ${ e.message }`);
		}
		else {
			log(LogSeverity.ERROR, "init/handler", "Unknown error occurred.");
		}

		const data: IMessageData = {
			message: "Data insertion failed."
		};

		res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(data);
	}
}

function validatePostData(data: IInitPOSTData) {
	const isDefined = typeof(data.key) !== "undefined";
	const hasValidTypes = typeof(data.key) === "string";
	const hasValidData = hasValidTypes && data.key !== "";

	log(LogSeverity.DEBUG, "init/validatePostData", `isDefined = ${ isDefined }, hasValidTypes = ${ hasValidTypes }, hasValidData = ${ hasValidData }`);

	return isDefined && hasValidTypes && hasValidData;
}
