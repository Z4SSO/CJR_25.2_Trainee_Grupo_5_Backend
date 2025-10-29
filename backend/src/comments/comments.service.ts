import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentDto } from './comment.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CommentsService {

  constructor(private prisma: PrismaService) { }

  async createStoreRatingComment(data: CommentDto, StoreRatingId: number, UserId: number) {
    const StoreRating = await this.prisma.StoreRatings.findUnique({
      where: { id: StoreRatingId }
    })

    if (!StoreRating) {
      throw new NotFoundException("Avaliacao nao encontrada")
    }

    return this.prisma.RatingComments.create({
      data: {
        ...data,
        user_id: UserId,
        store_rating_id: StoreRatingId,
      },
    })
  }

  async createProductRatingComment(data: CommentDto, ProductRatingId: number, UserId: number) {
    const ProductRating = await this.prisma.ProductRatings.findUnique({
      where: { id: ProductRatingId }
    })

    if (!ProductRating) {
      throw new NotFoundException("Avaliacao nao encontrada")
    }

    return this.prisma.RatingComments.create({
      data: {
        ...data,
        user_id: UserId,
        product_rating_id: ProductRatingId,
      },
    })
  }



  async findAll() {
    return this.prisma.ratingComment.findMany();
  }

  async update(id: number, data: CommentDto) {
    const commentexists = await this.prisma.ratingComment.findUnique({
      where: { id }
    })
    if (!commentexists) {
      throw new Error("comment not found")
    }
    return await this.prisma.ratingComment.update({
      data,
      where: { id }
    })
  }

  async delete(id: number) {
    const commentexists = await this.prisma.ratingComment.findUnique({
      where: { id }
    })
    if (!commentexists) {
      throw new Error("comment not found")
    }
    return await this.prisma.ratingComment.delete({
      where: { id }
    })
  }

  async findOne(id: number) {
    const commentexists = await this.prisma.ratingComment.findUnique({
      where: { id }
    })
    if (!commentexists) {
      throw new Error("comment not found")
    }
    return commentexists;
  }
}
