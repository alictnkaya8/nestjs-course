import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import environment from 'tools/environment/environment';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authJwt = req.headers.authorization;

    if(req.baseUrl !== "/api/login"){
        if(!authJwt){
            next();
            throw new HttpException('JWT could not found!', HttpStatus.FORBIDDEN);
        } else {
            try {
                const user = jwt.verify(authJwt.slice(7, authJwt.length), environment.jwtSecret);
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
        return;
    }
  }
}
