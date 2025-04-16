const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const Telefone = await prisma.Telefone.create({
            data: req.body
        });
        res.status(201).json(Telefone).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const Telefones = await prisma.telefone.findMany();
    res.json(Telefones);
}


const update = async (req, res) => {
    try {
        const Telefone = await prisma.telefone.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(Telefone).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const Telefone = await prisma.Telefone.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(Telefone).end();
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