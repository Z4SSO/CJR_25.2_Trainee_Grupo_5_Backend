import { Module } from '@nestjs/common';
import { StrRatingsService } from './str_ratings.service';
import { PrismaService } from 'src/database/prisma.service';
import { StrRatingsController } from './str_ratings.controller';

@Module({
    providers: [StrRatingsService, PrismaService],
    controllers: [StrRatingsController]
})
export class StrRatingsModule {}
