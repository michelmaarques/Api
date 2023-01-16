import { Router } from "express";
import { CursoController } from "./controllers/CursoController";

const routes = Router();

routes.post('/createCurso', new CursoController().create);
routes.post('/updateCurso', new CursoController().update);
routes.get('/listCursos', new CursoController().list);


export default routes;