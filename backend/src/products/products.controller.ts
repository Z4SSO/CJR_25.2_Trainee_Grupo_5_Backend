import { Controller, Get, Post, Body, Param, Delete, Put, Patch} from '@nestjs/common';
import { ProductsService } from './products.service';   
import { ProductsDto } from './dto/products.dto';   
import { UpdateProductsDto } from './dto/update-products.dto';


@Controller('products')
export class ProductsController {

    constructor (private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() data: ProductsDto){
        return this.productsService.create(data);
    }
    @Get()
    findAll(){
        return this.productsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.productsService.findOne(Number(id));
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() data: UpdateProductsDto){
        return this.productsService.update(Number(id), data);
    }
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.productsService.delete(Number(id));
    }  
}
