import { IsInt, IsNotEmpty, IsOptional, Min, Max, IsString } from 'class-validator';

export class StrRatingsDto {
    
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
    @IsString()
    comment?: string;
    
}
