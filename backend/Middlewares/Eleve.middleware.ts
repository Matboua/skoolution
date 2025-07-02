import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class EleveMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (!req['user'] || req['user'].type !== 'Secretaire') {
            return res.status(403).json({
                message: 'Access denied. This route is only accessible to Secretaire (Secretaire).',
            });
        }
        next();
    }
}
