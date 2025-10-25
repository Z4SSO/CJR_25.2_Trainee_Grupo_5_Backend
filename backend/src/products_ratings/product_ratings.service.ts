import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { productRatingsDto } from './dto/products_ratings.dto';

@Injectable()
export class ProductRatingsService {

        constructor (private prisma: PrismaService) {}
    
        async create (data: productRatingsDto) {
            const user = await this.prisma.users.findUnique({
                where: {
                    id: data.user_id
                }
            });
            if (!user) throw new NotFoundException('Usuário não encontrado');
    
            const product = await this.prisma.users.findUnique({
                where: {
                    id: data.product_id
                }
            });
            if (!product) throw new NotFoundException('Produto não encontrado');
    
            const existe = await this.prisma.productRatings.findFirst({
                where: {
                    user_id: data.user_id,
                    product_id: data.product_id,
                }
            });
            if (existe) throw new BadRequestException('Usuário já avaliou este produto');
    
            const rating = await this.prisma.productRatings.create({
                data
            });
            return rating;
        }
    
        async getAll() {
            return await this.prisma.productRatings.findMany();
        }
    
        async getUnique(id: number) {
            const ratingExists = await this.prisma.productRatings.findUnique ({
                where: {
                    id,
                }
            });
            if (!ratingExists) {
                throw new NotFoundException("Avaliação não encontrada");
            }
            return ratingExists;
        }
    
        async update(id: number, data: productRatingsDto) {
            const ratingExists = await this.prisma.productRatings.findUnique ({
                where: {
                    id,
                }
            });
            if (!ratingExists) {
                throw new NotFoundException("Avaliação não encontrada");
            }
            return await this.prisma.productRatings.update({
                data,
                where: {
                    id,
                }
            });
        }
    
        async delete(id: number) {
            const ratingExists = await this.prisma.productRatings.findUnique ({
                where: {
                    id,
                }
            });
            if (!ratingExists) {
                throw new NotFoundException("Avaliação não encontrada");
            }
            return await this.prisma.productRatings.delete({ where: { id } });
        }
    
    }
    
