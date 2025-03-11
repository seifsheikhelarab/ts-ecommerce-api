import { Request, Response, NextFunction } from 'express';
import log from '../utils/logger';
import { createUser } from '../service/user.service';

export async function createUserHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await createUser(req.body);
        return res.status(201).json(user);
    } catch (e: any) {
        log.error(e);
        return res.status(409).send(e.message);
    }
}

