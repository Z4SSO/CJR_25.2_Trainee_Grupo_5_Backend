import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

@Injectable()
export class CategoriesService {

    constructor (private prisma: PrismaService) {}

    async create(data: CategoriesDto) {
        const category = await this.prisma.categories.create ({
            data
        })
        if(category.parent_category_id){
            await this.prisma.categories.update({
                where: {id: category.parent_category_id},
                data: {
                    child_categories: {
                        connect: {id: category.id}
                    }
                }
            });
            
        }        
        return category;
    }

    async findAll() {
        return this.prisma.categories.findMany();
    }

    async update(id: number, data: UpdateCategoriesDto) {
        const categoryexists = await this.prisma.categories.findUnique({
            where: {id}
        });
        if(!categoryexists){
            throw new NotFoundException("Categoria não encontrada")
        }
        return await this.prisma.categories.update({
            data,
            where: {id}
        });
    }

    async delete(id: number) {
        const categoryexists = await this.prisma.categories.findUnique({
            where: {id}
        });
        if(!categoryexists){
            throw new NotFoundException("Categoria não encontrada")
        }
        return await this.prisma.categories.delete({
            where: {id}
        });
    }

    async findOne(id: number) {
        const categoryexists = await this.prisma.categories.findUnique({
            where: {id}
        });
        if(!categoryexists){
            throw new NotFoundException("Categoria não encontrada")
        }
        return categoryexists;
    }

}
