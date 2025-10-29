import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import type { CommentDto } from './comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Post()
  async create(@Body() data: CommentDto) {
    return this.commentsService.create(data);
  }

  @Get()
  async findAll() {
    return this.commentsService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: CommentDto) {
    return this.commentsService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.commentsService.delete(Number(id));
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.commentsService.findOne(Number(id));
  }


}

