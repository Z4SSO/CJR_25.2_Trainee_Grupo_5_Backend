import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
//import { ProductsImagesDto } from ...

export class ProductsDto {

  @IsNumber()
  store_id: number;

  @IsNumber()
  category_id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductsImagesDto)
  product_images?: ProductsImagesDto[];
}