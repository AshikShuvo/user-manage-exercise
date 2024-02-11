import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dtos/createUser.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create({ email, password }: CreateUserDto) {
    //   check if email exists in db;
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    // if user exist throw a conflict exception
    if (userExists) {
      throw new ConflictException();
    }
    //   if no user exists with the same email create new user in db
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return user;
  }

  async findOneByEmail(email: string) {
    const user= await this.prismaService.user.findUnique({ where: { email } });
    return user;
  }

  findMany() {}
}
