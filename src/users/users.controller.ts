import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(":id")
  getUserById(@Param("id") id: number ) {
    return this.usersService.getUserById(id)
  }

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    console.log('@ Body', dto);

    return this.usersService.createUser(dto);
  }

  @Delete()
  deleteUser(@Body() dto: UserDto) {
    return this.usersService.deleteUser(dto.id)
  }

  @Patch()
  updateUser(@Body() dto: UserDto){
    return this.usersService.updateUser(dto)
  }
}
