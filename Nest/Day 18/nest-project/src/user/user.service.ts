import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async createUser(name: string, email: string, password: string) {
    const user = await this.userModel.create({
      name,
      email,
      password,
    });

    return user;
  }
    async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
}