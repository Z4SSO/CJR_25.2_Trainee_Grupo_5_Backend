import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import type { CommentDto } from './comment.dto';
import { CurrentUser } from 'src/auth/decorators/curretn-user.decorator';
import { User } from 'src/user/entity/user.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Post("store-rating/:ratingid")
  async createStoreRatingComment(@Param("ratingid", ParseIntPipe) ratingid: number,
    @Body() data: CommentDto,
    @CurrentUser() user: User) {
    return this.commentsService.createStoreRatingComment(data, ratingid, user.id);
  }

  @Post("product-rating/:ratingid")
  async createProductRatingComment(@Param("ratingid", ParseIntPipe) ratingid: number,
    @Body() data: CommentDto,
    @CurrentUser() user: User) {
    return this.commentsService.createProductRatingComment(data, ratingid, user.id);
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

