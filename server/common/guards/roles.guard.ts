import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

/**
 * RolesGurad
 *
 * @export
 * @class RolesGuard
 * @implements {CanActivate}
 */
@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) { }

	/**
	 * can active
	 *
	 * @param {ExecutionContext} context
	 * @returns {boolean}
	 * @memberof RolesGuard
	 */
	public canActivate(context: ExecutionContext): boolean {
		const roles: any = this.reflector.get<string[]>('roles', context.getHandler());
		if (!roles) {
			return true;
		}
		const request: any = context.switchToHttp().getRequest();
		const user: any = request.user;
		const hasRole: any = (): any =>
			user.roles.some((role) => !!roles.find((item) => item === role));

		return user && user.roles && hasRole();
	}
}
