import { Controller, Post, Get, HttpCode, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  login(@Body() loginDto: Record<string, string>) {
    return this.authService.login(loginDto.login, loginDto.password);
  }

  @Public()
  @Get('public')
  public() {
    return 'This is a public route';
  }
}
