export enum LogSeverity {
  DEBUG = 0,
  LOG,
  WARN,
  ERROR
}

const severityString = [ "DEBUG", "LOG", "WARN", "ERROR" ];

/* only use at API routes */
export function log(severity: LogSeverity, source: string, message: string) {
	if(typeof(process.env.DEVELOPMENT) === "undefined" || process.env.DEVELOPMENT !== "1") {
		if(severity === LogSeverity.DEBUG) {
			return;
		}
	}

	// eslint-disable-next-line no-console
	console.log(`[${ severityString[severity] }] ${ source } :: ${ message }`);
}
