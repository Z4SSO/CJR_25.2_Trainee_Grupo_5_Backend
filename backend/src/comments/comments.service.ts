import { Injectable } from '@nestjs/common';
import { CommentDto } from './comment.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CommentsService {

  constructor(private prisma: PrismaService) { }

  async create(data: CommentDto) {

    const hasStoreId = data.store_rating_id !== undefined && data.store_rating_id !== null;
    const hasProductId = data.product_rating_id !== undefined && data.product_rating_id !== null;

    if (hasStoreId === hasProductId) {
      throw new Error('Comment must have only one store_rating_id OR product_rating_id, one or the other');
    }





    const comment = await this.prisma.ratingComment.create({
      data
    });
    return comment;
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
