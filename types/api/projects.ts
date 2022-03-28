import { IProjectItemKeyData, IProjectItemData } from "../project-item";
import { IMessageData } from "./message";

export interface IProjectItemDetailData extends IProjectItemKeyData {
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
