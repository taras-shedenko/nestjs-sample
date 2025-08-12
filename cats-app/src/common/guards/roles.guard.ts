import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) return true;
    const user = context.switchToHttp().getRequest().user;
    if (!user) return true;
    return user && user.roles.some((role: string) => roles.includes(role));
  }
}
