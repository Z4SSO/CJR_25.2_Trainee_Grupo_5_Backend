import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    create(@Body() data: CategoriesDto){
        return this.categoriesService.create(data);
    }
    @Get()
    findAll(){
        return this.categoriesService.findAll();
    }   
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.categoriesService.findOne(Number(id));
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() data: UpdateCategoriesDto){
        return this.categoriesService.update(Number(id), data);
    }   
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.categoriesService.delete(Number(id));
    }


}
