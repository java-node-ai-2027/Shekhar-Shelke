import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    getcontent(){
        return "Hello rohan"
    } 
    @Get('/getcontent')
    getUser(){
        return "Hello world"
    }
  
}
