import { IKeyPOSTData } from "./key";
import { IProjectItemData } from "../project-item";
import { IMessageData } from "./message";

export interface IProjectItemPOSTData extends IKeyPOSTData {
	data: IProjectItemData;
}

export interface IProjectItemResponseData extends IMessageData {
	data: IProjectItemData;
}

export interface IProjectItemsResponseData extends IMessageData {
	data: IProjectItemData[];
}
