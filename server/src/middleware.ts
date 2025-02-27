import jwt, { JwtPayload } from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
import { JWT_SECRET } from "./config"

interface AuthRequest extends Request {
    userId?: string
}

export function AuthMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
    const authHeader = req.body.authorization

    if (!authHeader) {
        res.status(403).json({
            message: "Please log in to continue"
        })
    }
    try {
    const decodedData = jwt.verify(authHeader, JWT_SECRET)

    if(typeof decodedData === "object" && !("userId" in decodedData)) {
        res.status(403).json({
            message: "Invalid auth token"
        })
    }
    
    req.userId = (decodedData as JwtPayload).userId 
    next()
    } catch(err: any) {
        res.status(403).json({
            message: err
        })
    }
}