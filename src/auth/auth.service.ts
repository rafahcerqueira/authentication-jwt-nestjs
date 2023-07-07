import { UnauthorizedError } from './errors/unauthorized.error';
import { UserService } from 'src/user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) return { ...user, password: undefined };
    }

    throw new UnauthorizedError('Email or password provided is incorrect.');
  }
}
