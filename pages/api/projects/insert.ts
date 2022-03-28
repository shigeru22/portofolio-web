import type { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";
import { HTTPStatus, HTTPMethod } from "../../../utils/http";
import { LogSeverity, log } from "../../../utils/log";
import { isEnvironmentKeyEqual } from "../../../utils/key";
import { isProjectItemKeysDefined, isProjectItemKeysTypeValid, isProjectItemKeysValueValid } from "../../../utils/validation";
import { IMessageData } from "../../../types/api/message";
import { IProjectItemDetailData } from "../../../types/api/projects";
import { IProjectItemData } from "../../../types/project-item";

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

	if(typeof(req.headers.authorization) === "undefined") {
		const data: IMessageData = {
			message: "Authorization not provided."
		};

		res.status(HTTPStatus.UNAUTHORIZED).json(data);
		return;
	}

	const authData = req.headers.authorization.split(" ");
	if(authData.length !== 2 || authData[0] !== "Bearer") {
		const data: IMessageData = {
			message: "Invalid authorization data."
		};

		log(LogSeverity.WARN, "init/handler", "Invalid authorization provided.");
		res.status(HTTPStatus.UNAUTHORIZED).json(data);
		return;
	}

	if(!isEnvironmentKeyEqual(authData[1])) {
		const data: IMessageData = {
			message: "Invalid authorization data."
		};

		log(LogSeverity.WARN, "init/handler", "Invalid key provided.");
		res.status(HTTPStatus.UNAUTHORIZED).json(data);
		return;
	}

	const body = req.body as IProjectItemData;
	if(!validatePostData(body)) {
		const data: IMessageData = {
			message: "Invalid POST data."
		};

		res.status(HTTPStatus.BAD_REQUEST).json(data);
		return;
	}

	const deta = Deta(authData[1]);
	const db = deta.Base("portfolio-items");

	try {
		let currentLastId = 0;
		{
			const currentData = (await db.fetch()).items as unknown as IProjectItemDetailData[];
			if(currentData.length > 0) {
				currentLastId = parseInt(currentData[currentData.length - 1].key, 10);
			}
		}

		if(isNaN(currentLastId)) {
			const data: IMessageData = {
				message: "Inconsistent data key detected."
			};

			log(LogSeverity.ERROR, "projects/add/handler", "Non-numeric key string detected. Fix the key and try again.");
			res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(data);
			return;
		}

		const date = new Date();

		await db.put({
			name: body.name,
			description: body.description,
			icon: body.icon,
			color: body.color,
			technologies: body.technologies,
			longDescription: body.longDescription,
			projectLink: body.projectLink,
			screenshots: body.screenshots,
			dateAdded: date.toISOString()
		}, (currentLastId + 1).toString());

		const data: IMessageData = {
			message: "Data insertion success. Check Deta Base GUI for inserted data."
		};

		log(LogSeverity.LOG, "projects/add/handler", "portfolio-items: Inserted 1 row.");
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

function validatePostData(data: IProjectItemData) {
	const isDefined = isProjectItemKeysDefined(data);
	const hasValidTypes = isProjectItemKeysTypeValid(data);
	const hasValidData = hasValidTypes && isProjectItemKeysValueValid(data);

	log(LogSeverity.DEBUG, "projects/add/validatePostData", `isDefined = ${ isDefined }, hasValidTypes = ${ hasValidTypes }, hasValidData = ${ hasValidData }`);

	return isDefined && hasValidTypes && hasValidData;
}
