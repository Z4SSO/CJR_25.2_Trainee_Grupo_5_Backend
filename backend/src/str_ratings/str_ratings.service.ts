import { Injectable, NotFoundException } from '@nestjs/common';
import { StrRatingsDto } from './dto/str_ratings.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class StrRatingsService {

    constructor (private prisma: PrismaService) {}

    async create (data: StrRatingsDto) {
        const rating = await this.prisma.storeRatings.create({
            data
        });
        return rating;
    }

    async getAll() {
        return await this.prisma.storeRatings.findMany();
    }

    async getUnique(id: number) {
        const ratingExists = await this.prisma.storeRatings.findUnique ({
            where: {
                id,
            }
        });
        if (!ratingExists) {
            throw new NotFoundException("Avaliação não encontrada");
        }
        return ratingExists;
    }

    async update(id: number, data: StrRatingsDto) {
        const ratingExists = await this.prisma.storeRatings.findUnique ({
            where: {
                id,
            }
        });
        if (!ratingExists) {
            throw new NotFoundException("Avaliação não encontrada");
        }
        return await this.prisma.storeRatings.update({
            data,
            where: {
                id,
            }
        });
    }

    async delete(id: number) {
        const ratingExists = await this.prisma.storeRatings.findUnique ({
            where: {
                id,
            }
        });
        if (!ratingExists) {
            throw new NotFoundException("Avaliação não encontrada");
        }
        await this.prisma.storeRatings.delete({
            where: {
                id,
            }
        });
        return {message: 'Avaliação deletada'};
    }

}
