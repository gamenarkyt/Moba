import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthUserDto } from './dto/authUser.dto';
import { UserDto } from 'src/users/dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  signUp() {}
  async signIn(authUser: AuthUserDto): Promise<{ access_token: string }> {
    console.log('@ dto: ', authUser);

    const findUser = await this.prisma.user.findFirst({
      where: {
        name: authUser.name,
        password: authUser.password,
      },
    });
    console.log('@ Find: ', findUser);

    if (findUser) {
      const payload = { sub: findUser.id, name: findUser.name };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    throw new BadRequestException({ message: 'Username or password incorect' });
  }
}
