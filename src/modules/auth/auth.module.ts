import { Module } from '@nestjs/common';
import { JWTStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthService, JWTStrategy],
})
export class authModule {}
