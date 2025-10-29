import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CommentDto {

  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsOptional()
  @IsNumber()
  store_rating_id?: number;

  @IsOptional()
  @IsNumber()
  product_rating_id?: number;

  @IsString()
  @IsNotEmpty()
  content: string;

}
