import { News } from "../models/news";
import { IService } from "./IService";

/**
* Contrato INewsService
* @summary esse contrato implementa a interface IService passando
a model de News
*/
export interface INewsService extends IService<News> {}
