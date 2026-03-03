import { Response } from "express";

export function handleError(error: any, res: Response) {
    return res.status(500).send({
        ok: false,
        message: error.toString()
    });
}
