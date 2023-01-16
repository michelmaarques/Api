import { AppDataSource } from "../data-source";
import { Curso } from "../entities/Curso";

export const CursoRepository = AppDataSource.getRepository(Curso);