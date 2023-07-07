import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
