import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe} from '@nestjs/common';
import { ProductsService } from './products.service';   
import { CreateProductsDto } from './dto/products.dto';   
import { CurrentUser } from 'src/auth/decorators/curretn-user.decorator';
import { User } from 'src/user/entity/user.entity';
import { UpdateProductsDto } from './dto/update-products.dto';


@Controller('products')
export class ProductsController {

    constructor (private readonly productsService: ProductsService) {}

    @Post('store/:storeId')
    create(
        @Param('storeId', ParseIntPipe) storeId: number,
        @CurrentUser() user: User,
        @Body() data: CreateProductsDto,
    )
        {
        return this.productsService.create(data, storeId, user.id);
    }
    @Get()
    findAll(){
        return this.productsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.productsService.findOne(Number(id));
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() data: UpdateProductsDto){
        return this.productsService.update(Number(id), data);
    }
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.productsService.delete(Number(id));
    }  
}
