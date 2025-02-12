import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from Authorization header
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,                      // Use JWT secret from .env
    });
  }

  async validate(payload: any) {
    return { userId: payload.id };  // Attach user info to the request object
  }
}