import { IProjectItemKeyData } from "../project-item";
import { IMessageData } from "./message";

export interface IProjectItemDetailData extends IProjectItemKeyData {
	dateAdded: Date | string;
}

export interface IProjectItemResponseData extends IMessageData {
	data: IProjectItemKeyData;
}

export interface IProjectItemsResponseData extends IMessageData {
	data: IProjectItemKeyData[];
}
