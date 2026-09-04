import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

let count =10;
@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Post('signin')
    signin(@Body() body: any){
       return this.authService.login(body)
    }
   
     
   @Post('signup')
  signup(@Body() body: any) {
    return this.authService.signup(body);
  }

}
