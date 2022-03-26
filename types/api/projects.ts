import { IKeyPOSTData } from "./key";
import { IProjectItemData } from "../project-item";

export interface IProjectItemPOSTData extends IKeyPOSTData {
	data: IProjectItemData
}
