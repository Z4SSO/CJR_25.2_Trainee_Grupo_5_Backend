import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, Patch } from '@nestjs/common';
import { CommentsService } from './comments.service';
import type { CommentDto } from './comment.dto';
import { CurrentUser } from 'src/auth/decorators/curretn-user.decorator';
import { User } from 'src/user/entity/user.entity';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Post("store-rating/:ratingId")
  async createStoreRatingComment(
    @Param("ratingId", ParseIntPipe) ratingId: number,
    @Body() data: CommentDto,
    @CurrentUser() user: User) {
    return this.commentsService.createStoreRatingComment(data, ratingId, user.id);
  }

  @Post("product-rating/:ratingId")
  async createProductRatingComment(
    @Param("ratingId", ParseIntPipe) ratingId: number,
    @Body() data: CommentDto,
    @CurrentUser() user: User) {
    return this.commentsService.createProductRatingComment(data, ratingId, user.id);
  }

  @IsPublic()
  @Get('store-rating/:ratingId')
  async findAllStoreRating(@Param('ratingId', ParseIntPipe) ratingId: number) {
    return this.commentsService.findAllStoreRating(ratingId);
  }

  @IsPublic()
  @Get('product-rating/:ratingId')
  async findAllProductRating(@Param('ratingId', ParseIntPipe) ratingId: number) {
    return this.commentsService.findAllProductRating(ratingId);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @CurrentUser() user: User,
    @Body() data: CommentDto) {
    return this.commentsService.update(id, data, user.id);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: User,
  ) {
    return this.commentsService.delete(id, user.id);
  }


}

