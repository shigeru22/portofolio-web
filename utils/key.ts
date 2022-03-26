import { timingSafeEqual } from "crypto";
import { LogSeverity, log } from "./log";

export function isEnvironmentKeyEqual(key: string) {
	if(typeof(process.env.DETA_PROJECT_KEY) === "undefined" || process.env.DETA_PROJECT_KEY === "") {
		return false;
	}

	const keyBuffer = Buffer.from(key, "utf8");
	const projectKeyBuffer = Buffer.from(process.env.DETA_PROJECT_KEY, "utf8");

	try {
		const equal = timingSafeEqual(keyBuffer, projectKeyBuffer);
		return equal;
	}
	catch (e) {
		if(e instanceof Error) {
			log(LogSeverity.ERROR, "isEnvironmentKeyEqual", `${ e.name }: ${ e.message }`);
		}
		else {
			log(LogSeverity.ERROR, "isEnvironmentKeyEqual", "Unknown error occurred.");
		}

		return false;
	}
}
