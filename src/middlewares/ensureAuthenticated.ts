import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Receber o token
    const authToken = request.headers.authorization;

    // Validar se o token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }    
    
    // Validar se o token é valido
    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "7e429fd220ae12f0dd437e7716281e88") as IPayload;   
        
        // adiciona essa propriedade na requisição que pode ser recuperda
        request.user_id = sub;

        return next();
    } catch(err) {
        return response.status(401).end();
    }    
}

