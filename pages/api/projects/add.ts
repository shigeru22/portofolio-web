import type { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";
import { HTTPStatus, HTTPMethod } from "../../../utils/http";
import { LogSeverity, log } from "../../../utils/log";
import { isEnvironmentKeyEqual } from "../../../utils/key";
import { isProjectItemKeysDefined, isProjectItemKeysTypeValid, isProjectItemKeysValueValid } from "../../../utils/validation";
import { IMessageData } from "../../../types/api/message";
import { IProjectItemPOSTData } from "../../../types/api/projects";

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

	const body = req.body as IProjectItemPOSTData;
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

		log(LogSeverity.WARN, "projects/add/handler", "Invalid key provided.");
		res.status(HTTPStatus.BAD_REQUEST).json(data);
		return;
	}

	const deta = Deta(body.key);
	const db = deta.Base("portfolio-items");

	try {
		const date = new Date();

		await db.put({
			name: body.data.name,
			description: body.data.description,
			icon: body.data.icon,
			color: body.data.color,
			technologies: body.data.technologies,
			longDescription: body.data.longDescription,
			projectLink: body.data.projectLink,
			screenshots: body.data.screenshots,
			dateAdded: date.toISOString()
		});

		const data: IMessageData = {
			message: "Data insertion success. Check Deta Base GUI for inserted data."
		};

		res.status(HTTPStatus.OK).json(data);
	}
	catch (e) {
		if(e instanceof Error) {
			log(LogSeverity.ERROR, "projects/add/handler", `${ e.name }: ${ e.message }`);
		}
		else {
			log(LogSeverity.ERROR, "projects/add/handler", "Unknown error occurred.");
		}

		const data: IMessageData = {
			message: "Data insertion failed."
		};

		res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(data);
	}
}

function validatePostData(data: IProjectItemPOSTData) {
	const isDefined = typeof(data.key) !== "undefined" && isProjectItemKeysDefined(data.data);
	const hasValidTypes = typeof(data.key) === "string" && isProjectItemKeysTypeValid(data.data);
	const hasValidData = hasValidTypes && data.key !== "" && isProjectItemKeysValueValid(data.data);

	log(LogSeverity.DEBUG, "projects/add/validatePostData", `isDefined = ${ isDefined }, hasValidTypes = ${ hasValidTypes }, hasValidData = ${ hasValidData }`);

	return isDefined && hasValidTypes && hasValidData;
}
