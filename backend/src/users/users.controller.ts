import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import type { usersdto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() data: usersdto) {
    return this.usersService.create(data);
  }
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: usersdto) {
    return this.usersService.update(Number(id), data);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.usersService.delete(Number(id));
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(Number(id));
  }
}
