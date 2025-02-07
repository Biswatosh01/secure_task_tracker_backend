import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from './user.schema';
import { JwtStrategy } from './jwt.strategy';      // ✅ Import JwtStrategy
import { JwtAuthGuard } from './jwt-auth.guard';   // ✅ Import JwtAuthGuard

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },  // Token expiry
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],  // ✅ Register JwtStrategy & JwtAuthGuard
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
