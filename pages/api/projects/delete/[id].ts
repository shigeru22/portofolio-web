import type { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";
import { HTTPStatus, HTTPMethod } from "../../../../utils/http";
import { LogSeverity, log } from "../../../../utils/log";
import { isEnvironmentKeyEqual } from "../../../../utils/key";
import { IMessageData } from "../../../../types/api/message";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IMessageData>) {
	if(req.method !== HTTPMethod.DELETE) {
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

		await db.delete(req.query.id);

		const data: IMessageData = {
			message: "Data deletion success."
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
