import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): string {
    return this.usersService.getUsers();
  }

  @Get(":id")
  async getUserById(@Param("id") id: number ): Promise<any> {
    return this.usersService.getUserById(Number(id))
  }

  @Post()
  createUser(@Body() body): any {
    console.log('@ Body', body);
    const name = body.name
    const password = body.password
    return this.usersService.createUser(name, password);
  }

  @Delete()
  deleetUser(@Body() body): any {
    const userId = body.id
    return this.usersService.deleteUser(userId)
  }

  @Patch()
  updateUser(@Body() body): any {
    return this.usersService.updateUser(body)
  }
}
