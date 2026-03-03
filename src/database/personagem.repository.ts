import { prisma } from '../config/prisma.js';
import { CreatePersonagemModel } from '../models/createPersonagemModel.js';
import { UpdatePersonagemModel } from '../models/updatePersonagemModel.js';

export class PersonagemRepository {
    public async list(idJogo: string) {
        return await prisma.personagem.findMany({
            where: {
                idJogo
            }
        });
    }

    public async create(data: CreatePersonagemModel) {
        return await prisma.personagem.create({
            data
        });
    }

    public async update(idPersonagem: string, idJogo: string, data: UpdatePersonagemModel) {
        return await prisma.personagem.update({
            where: {
                id: idPersonagem,
                idJogo: idJogo
            },
            data
        });
    }

    public async delete(idPersonagem: string, idJogo: string) {
        return await prisma.personagem.delete({
            where: {
                id: idPersonagem,
                idJogo: idJogo
            }
        });
    }
}
