import { BaseModel } from "./baseModel";

/**
* Model de news
* @type chapeu {String} titulo menor
* @type autor {String} quem escreveu a noticia
*/
export class News extends BaseModel {
    chapeu: String;
    autor: String;
}
