import { IProjectItemData } from "../project-item";
import { IMessageData } from "./message";

export interface IProjectItemDetailData extends IProjectItemData {
	key: string;
	dateAdded: Date | string;
}

export interface IProjectItemResponseData extends IMessageData {
	data: {
		key: number;
		item: IProjectItemData;
	};
}

export interface IProjectItemsResponseData extends IMessageData {
	data: {
		key: number;
		item: IProjectItemData;
	}[];
}
