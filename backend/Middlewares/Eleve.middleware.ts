import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class EleveMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (!req['user'] || req['user'].type !== 'Elev') {
            throw new UnauthorizedException('Access denied: Eleve only');
        }
        next();
    }
}
