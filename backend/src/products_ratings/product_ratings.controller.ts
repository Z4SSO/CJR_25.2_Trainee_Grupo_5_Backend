import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductRatingsService } from './product_ratings.service';
import { CreateProductRatingsDto, UpdateProductRatingsDto } from './dto/products_ratings.dto';

@Controller('product-ratings')
export class ProductRatingsController {
    
        constructor (private readonly productRatingsService: ProductRatingsService) {}
    
        @Post()
        async create(@Body() data: CreateProductRatingsDto) {
            return this.productRatingsService.create(data);
        }
    
        @Get()
        async getAll() {
            return this.productRatingsService.getAll();
        }
    
        @Get(":id")
        async getUnique(@Param("id") id: number) {
            return this.productRatingsService.getUnique(Number(id))
        }
    
        @Put(":id")
        async update(@Param("id") id: number, @Body() data: UpdateProductRatingsDto) {
            return this.productRatingsService.update(Number(id), data);
        }
    
        @Delete(":id")
        async delete(@Param("id") id: number) {
            return this.productRatingsService.delete(Number(id));
        }
        
    }

