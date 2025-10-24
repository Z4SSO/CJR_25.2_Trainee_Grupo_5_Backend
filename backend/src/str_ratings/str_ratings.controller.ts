import { Body, Controller, Post } from '@nestjs/common';
import { StoreRatingsDto } from './dto/str_ratings.dto';
import { StrRatingsService } from './str_ratings.service';

@Controller('str-ratings')
export class StrRatingsController {

    constructor (private readonly storeRatingsService: StrRatingsService) {}

    @Post()
    async create(@Body() data: StoreRatingsDto) {
        return this.storeRatingsService.create(data);
    }

}
