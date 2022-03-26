import type { NextApiRequest, NextApiResponse } from "next";
import { HTTPStatus } from "../../utils/http";
import { IMessageData } from "../../types/api/message";

export default function handler(req: NextApiRequest, res: NextApiResponse<IMessageData>) {
	const data: IMessageData = {
		message: "Hello, world!"
	};

	res.status(HTTPStatus.OK).json(data);
}
