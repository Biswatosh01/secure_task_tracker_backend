import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // User Signup Route
  @Post('signup')
  async signup(@Body() body) {
    return this.authService.signup(body.username, body.password);
  }

  // User Login Route
  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }
}