import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { usersdto } from './users.dto';

@Injectable()
export class UsersService {

  constructor (private prisma: PrismaService) {}

    async create(data: usersdto) {
    const users = await this.prisma.users.create ({
      data
    })
    return users
  }

  async findAll() {
    return this.prisma.users.findMany();
  }

  async update(id: number, data: usersdto) {
    const usersexists = await this.prisma.users.findUnique({
      where: {id}
    });
    if(!usersexists){
      throw new Error("Usuário não encontrado")
    }
    return await this.prisma.users.update({
      data,
      where: {id}
    });
  }

  async delete(id: number) {
     const usersexists = await this.prisma.users.findUnique({
      where: {id}
    });
    if(!usersexists){
      throw new Error("Usuário não encontrado")
    }
    return await this.prisma.users.delete({
      where: {id}
    });
  }

  async findOne(id: number) {
    const usersexists = await this.prisma.users.findUnique({
      where: {id}
    });
    if(!usersexists){
      throw new Error("Usuário não encontrado")
    }
    return usersexists;
  }
}
