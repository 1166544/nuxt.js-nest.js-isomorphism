import { SetMetadata } from '@nestjs/common';

/** Roles const */
// tslint:disable-next-line: variable-name
export const Roles: any = (...roles: string[]): any => SetMetadata('roles', roles);
