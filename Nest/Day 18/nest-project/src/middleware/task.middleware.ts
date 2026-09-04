import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class TaskMiddleware implements NestMiddleware{
    use(req:Request,res:Response,next:NextFunction){
        console.log('-----task validation------')
        console.log('new task has been created')
        next();
    }
}

