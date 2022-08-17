import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import environment from 'tools/environment/environment';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const authJwt = req.headers.authorization;

    if(req.url !== "/api/login"){
        if(!authJwt){
            throw new HttpException('JWT could not found!', HttpStatus.FORBIDDEN);
        } else {
            try {
                const user = jwt.verify(authJwt, environment.jwtSecret);
                if(user){
                    req['user'] = user;
                    next();
                } else {
                    throw new HttpException('Something went wrong!', HttpStatus.GATEWAY_TIMEOUT);
                }
            } catch(ex) {
                throw new HttpException(ex.message, HttpStatus.UNAUTHORIZED);
            }
        }
    } else {
        next();
    }
  }
}
