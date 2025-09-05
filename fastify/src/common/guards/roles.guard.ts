import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles || !roles.length) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user || !user.roles) return false;

    return user.roles.some((role: string) => roles.includes(role));
  }
}
