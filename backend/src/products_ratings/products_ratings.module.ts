import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { StrRatingsController } from 'src/str_ratings/str_ratings.controller';
import { StrRatingsService } from 'src/str_ratings/str_ratings.service';

@Module({
    providers: [StrRatingsService, PrismaService],
    controllers: [StrRatingsController]
})
export class ProductsRatingsModule {}
