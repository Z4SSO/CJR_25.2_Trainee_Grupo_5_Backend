import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto, UpdateStoreDto } from './stores.dto';


@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  async create(@Body() data: CreateStoreDto) {
    const userId = 1;
    return this.storesService.create(data, userId);
  }

  @Get()
  async findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.storesService.findOne(Number(id));
  }
  
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateStoreDto) {
    return this.storesService.update(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.storesService.remove(Number(id));
  }
}
