import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../user/user.service.js';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(body: any) {
    const existingUser = await this.usersService.findByEmail(
      body.email,
    );

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    

    const user = await this.usersService.createUser(
      body.name,
      body.email,
      hashedPassword,
    );

    return {
      message: 'User registered successfully',
      user,
    };
  }

  async login(body: any) {
  const user = await this.usersService.findByEmail(body.email);
    console.log(user)
  if (!user) {
    throw new BadRequestException('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(
    body.password,
    user.password,
  );

  if (!isPasswordValid) {
    throw new BadRequestException('Invalid email or password');
  }

  return {
    message: 'Login successful',
    user,
  };
}


}