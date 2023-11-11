import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers(): Promise<UserDto[] | BadRequestException> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number): Promise<UserDto | BadRequestException> {
    const findUser = await this.prisma.user.findUnique({ where: { id: Number(id) } });
    console.log(findUser);

    if (findUser) {
      return findUser;
    }
    return new BadRequestException({ message: 'User not found' });
  }

  async createUser(newUser: CreateUserDto): Promise<UserDto | BadRequestException> {
    const findUser = await this.prisma.user.findUnique({
      where: {
        name: newUser.name,
      },
    });
    console.log(findUser);

    if (!findUser) {
      // const nextId = this.prisma2.user.
      return await this.prisma.user.create({
        data: newUser,
      });
    }
    return new BadRequestException();
  }

  async deleteUser(id: number): Promise<UserDto | BadRequestException> {
    const findUser = await this.prisma.user.findUnique({ where: { id: id } });
    console.log(findUser);

    if (findUser) {
      return await this.prisma.user.delete({
        where: {
          id: id,
        },
      });
    }

    return new BadRequestException();
  }

  async updateUser(newUser: UserDto): Promise<UserDto | BadRequestException> {
    const findUser = await this.prisma.user.findUnique({
      where: { id: newUser.id },
    });
    console.log(findUser);

    if (findUser) {
      return await this.prisma.user.update({
        where: { id: newUser.id },
        data: newUser,
      });
    }
    return new BadRequestException();
  }
}
