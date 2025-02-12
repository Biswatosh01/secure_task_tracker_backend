import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Signup: Hash password and create a new user
  async signup(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userModel.create({ username, password: hashedPassword });
  }

  // Login: Verify password and return JWT token
  async login(username: string, password: string) {
    const user = await this.userModel.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in the environment variables.');
    }

    return {
      token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }),
    };
  }
}