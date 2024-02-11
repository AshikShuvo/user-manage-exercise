import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import * as jwt from 'jsonwebtoken';
import { SigninUserDto } from '../dtos/signinUser.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  private generateJwtToken({ id, email }: { id: number; email: string }) {
    return jwt.sign({ id, email }, process.env.JWT_TOKEN_KEY, {
      expiresIn: 36000,
    });
  }

  async signUpUser(data: CreateUserDto) {
    const { id, email } = await this.userService.create(data);
    //generate access token
    const token = this.generateJwtToken({ id, email });
    return { accessToken: token };
  }

  async signinUser({ email, password }: SigninUserDto) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new HttpException('Invalid Credential', 401);
    }
    const hashedPassword = user.password;
    const isValidPassword = await bcrypt.compare(password, hashedPassword);
    if (!isValidPassword) {
      throw new HttpException('Invalid Credential', 401);
    }
    const token = this.generateJwtToken({
      id: user.id,
      email: user.email,
    });
    return { accessToken: token };
  }
}
