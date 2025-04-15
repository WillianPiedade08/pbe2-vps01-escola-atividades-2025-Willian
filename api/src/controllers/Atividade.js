const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const atividade = await prisma.atividade.create({
            data: req.body
        });
        res.status(201).json(atividade).end();
    } catch (e) {
        res.status(400).json({ error: e.message }).end();
    }
};

const read = async (req, res) => {
    try {
        const atividades = await prisma.atividade.findMany({
            include: {
                aluno: true
            }
        });
        res.json(atividades);
    } catch (e) {
        res.status(400).json({ error: e.message }).end();
    }
};

const readOne = async (req, res) => {
    try {
        const atividade = await prisma.atividade.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                aluno: true
            }
        });
        if (!atividade) {
            return res.status(404).json({ error: 'Atividade não encontrada' }).end();
        }
        res.json(atividade);
    } catch (e) {
        res.status(400).json({ error: e.message }).end();
    }
};

const update = async (req, res) => {
    try {
        const atividade = await prisma.atividade.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(atividade).end();
    } catch (e) {
        res.status(400).json({ error: e.message }).end();
    }
};

const remove = async (req, res) => {
    try {
        await prisma.atividade.delete({
            where: {
                id: Number(req.params.id)
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