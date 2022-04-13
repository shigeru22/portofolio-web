class ValueError extends Error {
	constructor(msg: string) {
		super(msg);
		this.name = "ValueError";
		this.message = msg;
	}
}

export { ValueError };
