import type { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";
import { HTTPStatus, HTTPMethod } from "../../../utils/http";
import { LogSeverity, log } from "../../../utils/log";
import { IMessageData } from "../../../types/api/message";
import { IProjectItemDetailData, IProjectItemResponseData } from "../../../types/api/projects";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IMessageData>) {
	if(req.method !== HTTPMethod.GET) {
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

	const deta = Deta(process.env.PROJECT_KEY);
	const db = deta.Base("portfolio-items");

	try {
		const fetchResult = (await db.get(req.query.id)) as unknown as IProjectItemDetailData;

		const data: IProjectItemResponseData = {
			message: "Data retrieved successfully.",
			data: {
				key: parseInt(fetchResult.key, 10),
				item: {
					name: fetchResult.name,
					description: fetchResult.description,
					icon: fetchResult.icon,
					color: fetchResult.color,
					technologies: fetchResult.technologies,
					longDescription: fetchResult.longDescription,
					projectLink: fetchResult.projectLink,
					screenshots: fetchResult.screenshots
				}
			}
		};

		log(LogSeverity.LOG, `projects/${ req.query.id }/handler`, `portfolio-item: Returned item with key: ${ req.query.id }.`);
		res.status(HTTPStatus.OK).json(data);
	}
	catch (e) {
		if(e instanceof Error) {
			log(LogSeverity.ERROR, `projects/${ req.query.id }/handler`, `${ e.name }: ${ e.message }`);
		}
		else {
			log(LogSeverity.ERROR, `projects/${ req.query.id }/handler`, "Unknown error occurred.");
		}

		const data: IMessageData = {
			message: "Data query failed."
		};

		res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(data);
	}
}
