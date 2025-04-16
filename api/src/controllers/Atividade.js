const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const Atividade = await prisma.Atividade.create({
            data: req.body
        });
        res.status(201).json(Atividade).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const Atividades = await prisma.Atividade.findMany();
    res.json(Atividades);
}

const update = async (req, res) => {
    try {
        const Atividade = await prisma.Atividade.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(Atividade).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const Atividade = await prisma.Atividade.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(Atividade).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}