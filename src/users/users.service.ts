import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, User } from './schemas/user.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findOne(id: string) {
    const _id = mongoose.Types.ObjectId(id);
    const filter = { _id };
    return this.userModel.findOne(filter);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const _id = mongoose.Types.ObjectId(id);
    return this.userModel.findOneAndUpdate({ _id }, updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
