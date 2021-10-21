import { BaseModel } from "./baseModel";

/**
* Model de video
* @type url {String} url do video
* @type duração {String} tempo do video
*/
export class Videos extends BaseModel {
    url: String;
    duracao: String;
}
