//import {StoreDto} from;
//import {CategoryDto} from;
//import {ProductsRatingsDto} from;
//import {ProductsImagesDto} from ;
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductsDto {
  //store: StoreDto;
  //category: CategoryDto;
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;
  //product_ratings: ProductsRatingsDto;
  //product_images: ProductsImagesDto;
}