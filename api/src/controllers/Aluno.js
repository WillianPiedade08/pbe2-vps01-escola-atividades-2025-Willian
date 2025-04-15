const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const aluno = await prisma.aluno.create({
            data: req.body
        });
        res.status(201).json(aluno).end();
    } catch (e) {
        res.status(400).json({ error: e.message }).end();
    }
};

const read = async (req, res) => {
    try {
        const alunos = await prisma.aluno.findMany({
            include: {
                telefones: true,
                atividades: true
            }
        });
        res.json(alunos);
    } catch (e) {
        res.status(400).json({ error: e.message }).end();
    }
};

const readOne = async (req, res) => {
    try {
        const aluno = await prisma.aluno.findUnique({
            where: {
                ra: req.params.id
            },
            include: {
                telefones: true,
                atividades: true
            }
        });
        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' }).end();
        }
        res.json(aluno);
    } catch (e) {
        res.status(400).json({ error: e.message }).end();
    }
};

const update = async (req, res) => {
    try {
        const aluno = await prisma.aluno.update({
            data: req.body,
            where: {
                ra: req.params.id
            }
        });
        res.status(202).json(aluno).end();
    } catch (e) {
        res.status(400).json({ error: e.message }).end();
    }
};

const remove = async (req, res) => {
    try {
        const aluno = await prisma.aluno.delete({
            where: {
                ra: req.params.id
            }
        });
        res.status(204).end();
    } catch (e) {
        res.status(400).json({ error: e.message }).end();
    }
};

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
};