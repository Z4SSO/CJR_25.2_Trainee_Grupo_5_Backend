import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductsDto } from './dto/products.dto';
import type { PrismaService } from '../database/prisma.service';

@Injectable()
export class ProductsService {

    constructor (private prisma: PrismaService) {}

    async create(
        data: CreateProductsDto, 
        storeId: number,
        userId: number,) {

        const store = await this.prisma.stores.findUnique ({
            where: { id: storeId }
        });

        if (!store) {
            throw new NotFoundException("Loja não encontrada")
        }

        if (store.user_id !== userId) {
            throw new NotFoundException ("Você não tem permissão de adicionar um produto nesta loja.")
        } 

        const product = await this.prisma.products.create ({
            data: {
                ...data,
                store_id: storeId,
                category_id,
            }
        });
        return product

    }

    async findAll() {
        return this.prisma.products.findMany();
    }

    async update(id: number, data: ProductsDto) {
        const productsexists = await this.prisma.products.findUnique({
            where: {id}
        });
        if(!productsexists){
            throw new Error("Produto não encontrado")
        }
        return await this.prisma.products.update({
            data,
            where: {id}
        });
    } 

    async delete(id: number) {
        const productsexists = await this.prisma.products.findUnique({
            where: {id}
        });
        if(!productsexists){
            throw new Error("Produto não encontrado")
        }
        return await this.prisma.products.delete({
            where: {id}
        });
    }

    async findOne(id: number) {
        const productsexists = await this.prisma.products.findUnique({
            where: {id}
        });
        if(!productsexists){
            throw new Error("Produto não encontrado")
        }
        return productsexists;
    }
}
