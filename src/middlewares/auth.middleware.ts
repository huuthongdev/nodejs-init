import fetch from 'node-fetch';
import { Request, NextFunction } from "express";

import { ServerError, ErrorMessage } from "../utils";
import { getEnv, ENV } from "../configs";

export function authMiddleware(permissions: any[] = []) {
    return async (req: Request, res: any, next: NextFunction) => {
        if (ENV === 'test' || ENV === 'local') return next();

        try {
            const accessToken = req.headers['authorization'];
            if (!accessToken) throw new ServerError(ErrorMessage.UNAUTHORZIED, 400);

            const staff = await fetch(`${getEnv('INTERNAL_URI_SERVICE_INTERNAL_STAFF')}/internal/auth`, {
                headers: {
                    'authorization': accessToken,
                    'key': getEnv('INTERNAL_KEY'),
                }
            })
                .then(async res => {
                    const response = await res.json();
                    if (res.ok) return response
                    throw new ServerError(response.message, res.status, response.errors)
                })

            req.query.staff = staff;

            next();
        } catch (error) {
            res.onError(error)
        }
    }
}