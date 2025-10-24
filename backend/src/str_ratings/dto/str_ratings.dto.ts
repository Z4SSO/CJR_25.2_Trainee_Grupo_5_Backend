import { IsInt, IsNotEmpty, IsOptional, Min, Max } from 'class-validator';

export class StoreRatingsDto {
    
    @IsInt()
    @IsNotEmpty()
    user_id: number;

    @IsInt()
    @IsNotEmpty()
    store_id: number;

    @IsInt()
    @Min(1)
    @Max(5)
    @IsNotEmpty()
    rating: number;

    @IsOptional()
    comment?: string;
    
}
