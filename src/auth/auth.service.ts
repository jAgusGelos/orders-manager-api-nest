import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: CreateUserDto) {
    const userLogged = await this.usersService.findOne(user.email);
    if (userLogged && user.password === userLogged.password) {
      console.log(userLogged);
      const { password, ...result } = userLogged;
      const payload = { username: user.email, sub: user.password };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

    // if (!result){
    //   console.log('No user found');
    //   return;
    // }
    // else{
    //   const payload = { username: user.email, sub: user.password };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
    // }
  }
}
