import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: CreateUserDto })
  @Post('login')
  login(@Body() createUserDto: CreateUserDto): Promise<any> {
    console.log(createUserDto);
    return this.authService.login(createUserDto);
  }
}
