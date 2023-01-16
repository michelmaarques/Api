import { Request, Response } from "express";
import { CursoRepository } from "../repositories/CursoRepository";

export class CursoController {
    async create(req: Request, res: Response) {
        const { nome, descricao, vagas, modelo } = req.body;
        if (!nome || !modelo) {
            return res.status(400).json({ message: "Nome, vagas e modelo são campos obrigatórios!" });
        } else if (nome === null) {
            return res.status(400).json({ message: "O nome não pode ser null!" });
        } else if (nome.length > 180) {
            return res.status(400).json({ message: "O nome não pode conter mais que 180 caracteres!" });
        } else if (vagas <= 0) {
            return res.status(400).json({ message: "A quantia de vagas deve ser maior que zero!" });
        } else if (modelo != "online" && modelo != "presencial") {
            return res.status(400).json({ message: "O modelo dever ser online ou presencial!" });
        }
        try {
            const newCurso = CursoRepository.create({
                nome,
                descricao,
                vagas,
                modelo
            });
            await CursoRepository.save(newCurso);
            return res.status(201).json("Curso Adicionado");
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Erro interno" })
        }
    };

    async update(req: Request, res: Response) {
        const { id, nome, descricao, vagas, modelo } = req.body;
        if (!nome || !modelo) {
            return res.status(400).json({ message: "Nome, vagas e modelo são campos obrigatórios!" });
        } else if (nome === null) {
            return res.status(400).json({ message: "O nome não pode ser null!" });
        } else if (nome.length > 180) {
            return res.status(400).json({ message: "O nome não pode conter mais que 180 caracteres!" });
        } else if (vagas <= 0) {
            return res.status(400).json({ message: "A quantia de vagas deve ser maior que zero!" });
        } else if (modelo != "online" && modelo != "presencial") {
            return res.status(400).json({ message: "O modelo dever ser online ou presencial!" });
        }
        try {
            await CursoRepository.update(id, { nome, descricao, vagas, modelo });
            return res.status(200).json("Curso Atualizado");
        } catch (error) {

        }


    };

    async list(req: Request, res: Response) {
        try {
            const cursos = await CursoRepository.find();
            return res.json(cursos);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Erro interno" })
        }
    };
}