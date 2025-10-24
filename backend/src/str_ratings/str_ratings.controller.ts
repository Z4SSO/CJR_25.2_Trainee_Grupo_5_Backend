import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StoreRatingsDto } from './dto/str_ratings.dto';
import { StrRatingsService } from './str_ratings.service';

@Controller('str-ratings')
export class StrRatingsController {

    constructor (private readonly storeRatingsService: StrRatingsService) {}

    @Post()
    async create(@Body() data: StoreRatingsDto) {
        return this.storeRatingsService.create(data);
    }

    @Get(":id")
    async getAll() {
        return this.storeRatingsService.getAll();
    }

    @Get()
    async getUnique(@Param("id") id: number) {
        return this.storeRatingsService.getUnique(Number(id))
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data:StoreRatingsDto) {
        return this.storeRatingsService.update(Number(id), data);
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.storeRatingsService.delete(Number(id));
    }
    

}
