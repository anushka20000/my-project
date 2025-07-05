import { RequestHandler } from "express";
import { AuthRepository } from "../repositories/AuthRepository";

const repo = new AuthRepository()

export const adminLogin: RequestHandler = async (req, res, next) => {
    try {
        const response = await repo.adminLogin(req.body);
        return res.json({ success: true, data: response, error: null })
    } catch (e: any) {
        res.status(400).json({ success: false, data:null, error: e.message })
    }
}

export const findUserByEmail: RequestHandler = async (req, res, next) => {
    const email = req.params.email

    try {
        const response = await repo.getUserByEmail(email);
        return res.json({ success: true, data: response, error: null })
    } catch (e: any) {
        res.status(400).json({ success: false, data:null, error: e.message })
    }
}
export const findUserByEmailAdmin: RequestHandler = async (req, res, next) => {
    const email = req.params.email

    try {
        const response = await repo.getUserByEmailAdmin(email);
        return res.json({ success: true, data: response, error: null })
    } catch (e: any) {
        res.status(400).json({ success: false, data:null, error: e.message })
    }
}
export const findUserByPhoneAdmin: RequestHandler = async (req, res, next) => {
    const phone = req.params.phone

    try {
        const response = await repo.getUserByPhoneAdmin(phone);
        return res.json({ success: true, data: response, error: null })
    } catch (e: any) {
        res.status(400).json({ success: false, data:null, error: e.message })
    }
}
