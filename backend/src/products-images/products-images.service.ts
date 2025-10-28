import { Injectable } from '@nestjs/common';
import { CreateProductsImageDto } from './dto/create-products-image.dto';
import { UpdateProductsImageDto } from './dto/update-products-image.dto';

@Injectable()
export class ProductsImagesService {
  create(createProductsImageDto: CreateProductsImageDto) {
    return 'This action adds a new productsImage';
  }

  findAll() {
    return `This action returns all productsImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsImage`;
  }

  update(id: number, updateProductsImageDto: UpdateProductsImageDto) {
    return `This action updates a #${id} productsImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsImage`;
  }
}
