import { RequestHandler } from "express";
import { ContactPageRepository } from "../repositories/ContactPageRepository";

const repo = new ContactPageRepository()
//edit
export const editContactPage: RequestHandler = async (req, res, next) => {
    const id:any = req.params.id
    try {
        const data = await repo.edit(id)
        return res.json({ success: true, data: data })
    } catch (e: any) {
        res.status(404).json({ success: false, error: e.message })
    }
};

//UPDATE
export const updateContactPage: RequestHandler = async (req, res, next) => {
    try {
        await repo.update(req);
        return res.status(200).json({ success: true})
    } catch (e: any) {
        res.status(422).json({ error: ['could not update data', e.message] })
    }
};
export const seoContactPage: RequestHandler = async (req, res, next) => {
    try {
      const seo = await repo.contactSeo();
      return res.status(200).json({ success: true, data: seo})
    } catch (e: any) {
      res.status(422).json({ success: false,  data: null, error: ['could not delete data', e.message] })
  
    }
  }