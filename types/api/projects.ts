import { IProjectItemData } from "../project-item";
import { IMessageData } from "./message";

export interface IProjectItemDetailData extends IProjectItemData {
	dateAdded: Date | string;
}

export interface IProjectItemResponseData extends IMessageData {
	data: IProjectItemData;
}

export interface IProjectItemsResponseData extends IMessageData {
	data: IProjectItemData[];
}
