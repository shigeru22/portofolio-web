import { IProjectItemData } from "../types/project-item";

export function isProjectItemKeysDefined(item: IProjectItemData) {
	if(typeof(item) === "undefined") {
		return false;
	}

	let isTechnologiesArrayDataDefined = true;
	let isScreenshotArrayDataDefined = true;

	if(typeof(item.technologies) === "undefined") {
		return false;
	}

	item.technologies.forEach(data => {
		isTechnologiesArrayDataDefined = typeof(data) !== "undefined";
	});

	if(typeof(item.screenshots) === "undefined") {
		return false;
	}

	item.screenshots.forEach(data => {
		isScreenshotArrayDataDefined = typeof(data.image) !== "undefined" &&
			typeof(data.description) !== "undefined" &&
			typeof(data.portrait) !== "undefined";
	});

	return typeof(item.name) !== "undefined" &&
		typeof(item.description) !== "undefined" &&
		typeof(item.icon) !== "undefined" &&
		typeof(item.color) !== "undefined" &&
		isTechnologiesArrayDataDefined &&
		typeof(item.longDescription) !== "undefined" &&
		typeof(item.projectLink) !== "undefined" &&
		isScreenshotArrayDataDefined;
}

export function isProjectItemKeysTypeValid(item: IProjectItemData) {
	if(typeof(item) === "undefined") {
		return false;
	}

	let isTechnologiesArrayTypeValid = true;
	let isScreenshotArrayTypeValid = true;

	if(typeof(item.technologies) === "undefined") {
		return false;
	}

	item.technologies.forEach(data => {
		isTechnologiesArrayTypeValid = typeof(data) === "string";
	});

	if(typeof(item.screenshots) === "undefined") {
		return false;
	}

	item.screenshots.forEach(data => {
		isScreenshotArrayTypeValid = typeof(data.image) === "string" &&
			typeof(data.description) === "string" &&
			typeof(data.portrait) === "boolean";
	});

	return typeof(item.name) === "string" &&
		typeof(item.description) === "string" &&
		typeof(item.icon) === "string" &&
		typeof(item.color) === "string" &&
		isTechnologiesArrayTypeValid &&
		typeof(item.longDescription) === "string" &&
		typeof(item.projectLink) === "string" &&
		isScreenshotArrayTypeValid;
}

export function isProjectItemKeysValueValid(item: IProjectItemData) {
	if(typeof(item) === "undefined") {
		return false;
	}

	let isTechnologiesArrayDataValid = true;
	let isScreenshotArrayDataValid = true;

	if(typeof(item.technologies) === "undefined") {
		return false;
	}

	item.technologies.forEach(data => {
		isTechnologiesArrayDataValid = data !== "";
	});

	if(typeof(item.screenshots) === "undefined") {
		return false;
	}

	item.screenshots.forEach(data => {
		isScreenshotArrayDataValid = data.image !== "" && data.description !== "";
	});

	return item.name !== "" &&
		item.description !== "" &&
		item.icon !== "" &&
		item.color !== "" &&
		isTechnologiesArrayDataValid &&
		item.longDescription !== "" &&
		item.projectLink !== "" &&
		isScreenshotArrayDataValid;
}
