import { prisma } from '../config/prisma.js';
import { CreateJogoModel } from '../models/createJogoModel.js';
import { UpdateJogoModel } from '../models/updateJogoModel.js';

export class JogoRepository {
    public async list() {
        return await prisma.jogo.findMany();
    }

    public async create(data: CreateJogoModel) {
        return await prisma.jogo.create({
            data
        });
    }

    public async update(id: string, data: UpdateJogoModel) {
        return await prisma.jogo.update({
            where: {
                id
            },
            data
        });
    }

    public async delete(id: string) {
        return await prisma.jogo.delete({
            where: {
                id
            }
        })
    }
}
