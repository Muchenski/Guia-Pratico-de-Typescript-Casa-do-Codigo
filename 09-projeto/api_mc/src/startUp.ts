import express, { Application } from "express";
import database from "./infra/db";
import './shared/container';
import newsRouter from "./routes/newsRouter";
import videosRouter from "./routes/videosRouter";
import galeriaRouter from "./routes/galeriaRouter";
import "reflect-metadata";
import { NewsController } from "./controller/newsController";
import { VideosController } from "./controller/videosController";
import { GaleriaController } from "./controller/galeriaController";
import { container } from 'tsyringe';
import './shared/container';


// Arquivo de configurações do nosso projeto.

class StartUp {

    public app: Application;
    private _db: database = new database();

    constructor() {
        this.app = express();
        this._db.createConnection();
        this.routes();
    }
    
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.2" });
        });
        this.app.use("/", newsRouter);
        this.app.use("/", videosRouter);
        this.app.use("/", galeriaRouter);
    }
}
export default new StartUp();