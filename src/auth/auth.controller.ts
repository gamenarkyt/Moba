import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/authUser.dto';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Post()
  // signUp() {}

  @Post()
  signIn(@Body() dto: AuthUserDto) {


    return this.authService.signIn(dto)
  }
}
