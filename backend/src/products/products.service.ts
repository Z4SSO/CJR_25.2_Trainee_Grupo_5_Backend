import { Injectable } from '@nestjs/common';
import { ProductsDto } from './dto/products.dto';
import type { PrismaService } from '../database/prisma.service';

@Injectable()
export class ProductsService {

    constructor (private prisma: PrismaService) {}

    async create(data: ProductsDto) {
        const products = await this.prisma.products.create ({
            data
        })
        return products;
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
