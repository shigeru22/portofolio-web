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

	const deta = Deta(process.env.PROJECT_KEY);
	const db = deta.Base("portfolio-items");

	try {
		const fetchResult = (await db.fetch()).items as unknown as IProjectItemDetailData[];
		if(fetchResult.length === 0) {
			const data: IMessageData = {
				message: "Empty data returned."
			};

			res.status(HTTPStatus.NOT_FOUND).json(data);
			return;
		}

		const lastIndex = fetchResult.length - 1;
		const data: IProjectItemResponseData = {
			message: "Data retrieved successfully.",
			data: {
				key: parseInt(fetchResult[lastIndex].key, 10),
				item: {
					name: fetchResult[lastIndex].name,
					description: fetchResult[lastIndex].description,
					icon: fetchResult[lastIndex].icon,
					color: fetchResult[lastIndex].color,
					technologies: fetchResult[lastIndex].technologies,
					longDescription: fetchResult[lastIndex].longDescription,
					projectLink: fetchResult[lastIndex].projectLink,
					screenshots: fetchResult[lastIndex].screenshots
				}
			}
		};

		log(LogSeverity.LOG, "projects/last/handler", `portfolio-item: Returned last item with key: ${ fetchResult[lastIndex].key }.`);
		res.status(HTTPStatus.OK).json(data);
	}
	catch (e) {
		if(e instanceof Error) {
			log(LogSeverity.ERROR, "projects/last/handler", `${ e.name }: ${ e.message }`);
		}
		else {
			log(LogSeverity.ERROR, "projects/last/handler", "Unknown error occurred.");
		}

		const data: IMessageData = {
			message: "Data query failed."
		};

		res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(data);
	}
}
