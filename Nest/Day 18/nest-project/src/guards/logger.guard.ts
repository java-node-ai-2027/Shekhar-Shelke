import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

// @Injectable()
// export class LoggerGuard implements CanActivate {
//   canActivate(context: ExecutionContext): boolean {
//     console.log('Guard is checking the request');
//     return true;
//   }
// }

export class LoggerGuard implements CanActivate{
    canActivate(context:ExecutionContext):boolean {
        console.log("Guard is checking the request")
        return true;
    }
}