import { BaseModel } from "./baseModel";
import { Fotos } from "./fotos";

/**
* Model de galeria de fotos
* @type fotos {Array} lista da model de fotos
*/
export class Galeria extends BaseModel {
    fotos: Array<Fotos>;
}