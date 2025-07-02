import { Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request, Response, NextFunction } from "express";


@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(private readonly jwtSecret: JwtService) {}

    use(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers['authorization'];
            if (!token) {
                return res.status(401).json({ message: 'No authorization header provided' });
            }
            // Assuming the token is in the format "Bearer <token>"
            const tokenParts = token.split(' ');
            if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
                return res.status(401).json({ message: 'Invalid authorization header format' });
            }
            const jwtToken = tokenParts[1];
            const decodedToken = this.jwtSecret.verify(jwtToken);
            if (!decodedToken) {
                return res.status(401).json({ message: 'Invalid token' ,token: jwtToken});
            }
            // Attach the decoded token to the request object for further use
            req['user'] = decodedToken;
            // Proceed to the next middleware or route handler
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
}