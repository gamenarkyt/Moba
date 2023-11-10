import { BadRequestException, Body, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService ) {}

  getUsers(): any {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    const findUser = await this.prisma.user.findUnique({where: {id: id}})
    console.log(findUser);
    
    if (findUser) {
      return findUser
    }
    return new BadRequestException({"message": "User not found"})
  }

  async createUser(name: string, password: string): Promise<any> {
    const findUser = await this.prisma.user.findUnique(
      {
        where: {
          name: name
        }
      }
    )
    console.log(findUser);
    
    if (!findUser) {
      // const nextId = this.prisma2.user.
      return await this.prisma.user.create(
        {
          data: {
            name: name,
            password: password
          }
        }
      )

    }
    return new BadRequestException()
  }

  async deleteUser(id: number) {
    const findUser = await this.prisma.user.findUnique({where: {id: id}})
    console.log(findUser);
    
    if (findUser) {
      return await this.prisma.user.delete({where: {
        id: id
      }})
    }
    
    return new BadRequestException()
  }

  async updateUser(newUser: any) {
    const findUser = await this.prisma.user.findUnique({where: {id: newUser.id}})
    console.log(findUser);
    
    if (findUser) {
      return await this.prisma.user.update({where: {id: newUser.id}, data: newUser})
    }
    return new BadRequestException()
  }
}
