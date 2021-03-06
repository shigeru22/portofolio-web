import type { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";
import { HTTPStatus, HTTPMethod } from "../../../../utils/http";
import { LogSeverity, log } from "../../../../utils/log";
import { isEnvironmentKeyEqual } from "../../../../utils/key";
import { isProjectItemKeysDefined, isProjectItemKeysTypeValid, isProjectItemKeysValueValid } from "../../../../utils/validation";
import { IMessageData } from "../../../../types/api/message";
import { IProjectItemData } from "../../../../types/project-item";
import { IProjectItemDetailData } from "../../../../types/api/projects";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IMessageData>) {
	if(req.method !== HTTPMethod.PUT) {
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

		log(LogSeverity.WARN, "projects/update/handler", "Invalid authorization provided.");
		res.status(HTTPStatus.UNAUTHORIZED).json(data);
		return;
	}

	if(!isEnvironmentKeyEqual(authData[1])) {
		const data: IMessageData = {
			message: "Invalid authorization data."
		};

		log(LogSeverity.WARN, "projects/update/handler", "Invalid key provided.");
		res.status(HTTPStatus.UNAUTHORIZED).json(data);
		return;
	}

	if(typeof(req.query.id) !== "string") {
		const data: IMessageData = {
			message: "Invalid query parameter data."
		};

		res.status(HTTPStatus.BAD_REQUEST).json(data);
		return;
	}

	const id = parseInt(req.query.id, 10);
	if(isNaN(id) || id <= 0) {
		const data: IMessageData = {
			message: "ID parameter must be higher than 0."
		};

		res.status(HTTPStatus.BAD_REQUEST).json(data);
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
		const query = await db.get(req.query.id);
		if(query === null) {
			const data: IMessageData = {
				message: "Data with specified ID not found."
			};

			res.status(HTTPStatus.NOT_FOUND).json(data);
			return;
		}

		const prevData = query as unknown as IProjectItemDetailData;

		await db.put({
			name: body.name,
			description: body.description,
			icon: body.icon,
			color: body.color,
			technologies: body.technologies,
			longDescription: body.longDescription,
			projectLink: body.projectLink,
			screenshots: body.screenshots,
			dateAdded: typeof(prevData.dateAdded) === "string" ? prevData.dateAdded : prevData.dateAdded.toISOString()
		}, req.query.id);

		const data: IMessageData = {
			message: "Data update success. Check Deta Base GUI for updated data."
		};

		log(LogSeverity.LOG, "projects/update/handler", `portfolio-item: Updated 1 row with key: ${ prevData.key }.`);
		res.status(HTTPStatus.OK).json(data);
	}
	catch (e) {
		if(e instanceof Error) {
			log(LogSeverity.ERROR, "projects/update/handler", `${ e.name }: ${ e.message }`);
		}
		else {
			log(LogSeverity.ERROR, "projects/update/handler", "Unknown error occurred.");
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

	log(LogSeverity.DEBUG, "projects/update/validatePostData", `isDefined = ${ isDefined }, hasValidTypes = ${ hasValidTypes }, hasValidData = ${ hasValidData }`);

	return isDefined && hasValidTypes && hasValidData;
}
