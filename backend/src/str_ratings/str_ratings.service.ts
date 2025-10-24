import { Injectable } from '@nestjs/common';
import { StoreRatingsDto } from './dto/str_ratings.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class StrRatingsService {

    constructor (private prisma: PrismaService) {}

    async create (data: StoreRatingsDto) {
        await this.prisma.storeRatings.create({
            data: {
                user_id: data.user_id,
                store_id: data.store_id,
                rating: data.rating,
                comment: data.comment,
            },
        });
    }

}
