import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    const users = await this.prisma.users.findMany(); 

    const userWithoutPassword = users.map(user => {

      return {
        ...user,
        password_hash: undefined,
      };
    });
    
    return userWithoutPassword
  }

  async findOne(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { id: id }
    })

    if (!user) {
      throw new NotFoundException('Usuário não encontrado')
    }

    return {
      ...user,
      password_hash: undefined,
    };
  }

  async update(id: number, data: any) {
    await this.findOne(id)

    const dataToUpdate = {
      ...data 
    };

    if (data.password_hash){
      dataToUpdate.password_hash = await bcrypt.hash(data.password_hash, 10)
    };

    const updatedUser = await this.prisma.users.update({
      where: { id: id },
      data: dataToUpdate,
    });

    return {
      ...updatedUser,
      password_hash: undefined,
    };
  }

  async remove(id: number) {
    const userToDelete = await this.findOne(id);
    await this.prisma.users.delete({
      where: { id: id },
    });
    return userToDelete
  }
}
