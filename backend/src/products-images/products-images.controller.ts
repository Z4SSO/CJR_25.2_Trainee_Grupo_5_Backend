import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsImagesService } from './products-images.service';
import { CreateProductsImageDto } from './dto/create-products-image.dto';
import { UpdateProductsImageDto } from './dto/update-products-image.dto';

@Controller('products-images')
export class ProductsImagesController {
  constructor(private readonly productsImagesService: ProductsImagesService) {}

  @Post()
  create(@Body() createProductsImageDto: CreateProductsImageDto) {
    return this.productsImagesService.create(createProductsImageDto);
  }

  @Get()
  findAll() {
    return this.productsImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsImageDto: UpdateProductsImageDto) {
    return this.productsImagesService.update(+id, updateProductsImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsImagesService.remove(+id);
  }
}
