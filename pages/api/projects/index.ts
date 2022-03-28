import type { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";
import { HTTPStatus, HTTPMethod } from "../../../utils/http";
import { LogSeverity, log } from "../../../utils/log";
import { IMessageData } from "../../../types/api/message";
import { IProjectItemDetailData, IProjectItemsResponseData } from "../../../types/api/projects";

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

	const deta = Deta(process.env.PROJECT_KEY);
	const db = deta.Base("portfolio-items");

	try {
		const fetchResult = (await db.fetch()).items as unknown as IProjectItemDetailData[];
		fetchResult.sort((a, b) => {
			const dateA: Date = typeof(a.dateAdded) === "string" ? new Date(a.dateAdded) : a.dateAdded;
			const dateB: Date = typeof(b.dateAdded) === "string" ? new Date(b.dateAdded) : b.dateAdded;

			return dateA.getTime() - dateB.getTime();
		});

		const data: IProjectItemsResponseData = {
			message: "Data retrieved successfully.",
			data: fetchResult.map(item => ({
				key: parseInt(item.key, 10),
				item: {
					name: item.name,
					description: item.description,
					icon: item.icon,
					color: item.color,
					technologies: item.technologies,
					longDescription: item.longDescription,
					projectLink: item.projectLink,
					screenshots: item.screenshots
				}
			}))
		};

		res.status(HTTPStatus.OK).json(data);
	}
	catch (e) {
		if(e instanceof Error) {
			log(LogSeverity.ERROR, "projects/handler", `${ e.name }: ${ e.message }`);
		}
		else {
			log(LogSeverity.ERROR, "projects/handler", "Unknown error occurred.");
		}

		const data: IMessageData = {
			message: "Data insertion failed."
		};

		res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(data);
	}
}
