import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsDto } from './dto/products.dto';
import { PrismaService } from '../database/prisma.service';
import { UpdateProductsDto } from './dto/update-products.dto';

@Injectable()
export class ProductsService {

    constructor (private prisma: PrismaService) {}

    async create(data: ProductsDto) {
        const products = await this.prisma.products.create ({
            data
        })
        return products;

        /* 
            Para integração com crud e dto de imagens:

                const {product_images, ...rest} = data;
                const products = await this.prisma.products.create ({
                data: {
                    ...rest,
                    ...(product_images  
                        ? { product_images: { create: product_images.map (img => ( { image_url: img.image_url, order: img.order }))}}
                        : {}),
                },

            });
            return products;
    
            
        */ 
    }

    async findAll() {
        return this.prisma.products.findMany({
            include: {
                product_images: true
            }   
        });
    }

    async update(id: number, data: UpdateProductsDto) {
        const productsexists = await this.prisma.products.findUnique({
            where: {id}
        });
        if(!productsexists){
            throw new NotFoundException("Produto não encontrado")
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
            throw new NotFoundException("Produto não encontrado")
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
            throw new NotFoundException("Produto não encontrado")
        }
        return productsexists;
    }
}
