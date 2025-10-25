import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password_hash: await bcrypt.hash(createUserDto.password_hash, 10),
    } 

    const new_user = await this.prisma.users.create({
      data,
    });

    return {
      ...new_user,
      password_hash: undefined,
    };
  }

  async findbyEmail(email: string) {
    return await this.prisma.users.findUnique({
      where: { email },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.prisma.users.delete({
      where: { id },
    });
  }
}
