import { Module } from '@nestjs/common';
import { ProductsImagesService } from './products-images.service';
import { ProductsImagesController } from './products-images.controller';

@Module({
  controllers: [ProductsImagesController],
  providers: [ProductsImagesService],
})
export class ProductsImagesModule {}
