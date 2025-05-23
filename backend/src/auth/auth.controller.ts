// import { Controller } from '@nestjs/common';

// @Controller('auth')
// export class AuthController {}

// import { Controller, Post, Request, UseGuards } from '@nestjs/common';
// import { LocalAuthGuard } from './local-auth.guard';
// import { AuthService } from './auth.service';


// @Controller()
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @UseGuards(LocalAuthGuard)
//   @Post('auth/login')
//   async login(@Request() req) {
//     return req.user; // por ahora solo devolvemos el usuario
//     return this.authService.login(req.user);
//   }
// }
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
