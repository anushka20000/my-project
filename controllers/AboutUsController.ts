import { RequestHandler } from "express";
import { AboutUsRepository } from "../repositories/AboutUsRepository";

const repo = new AboutUsRepository()

//GET 
export const listAboutUs: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.list()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//GET 
export const listingAboutUs: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.listingDetails()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//edit
export const editAboutUs: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id
  try {
    const data = await repo.edit(id)
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};


//UPDATE 
export const updateAboutUs: RequestHandler = async (req, res, next) => {
  try {
    await repo.update(req.body);
    return res.status(200).json({ success: true})
  } catch (e: any) {
    res.status(422).json({ error: ['could not update data', e.message] })
  }
};

export const seoAboutUs: RequestHandler = async (req, res, next) => {
  try {
    const seo = await repo.aboutSeo();
    return res.status(200).json({ success: true, data: seo})
  } catch (e: any) {
    res.status(422).json({ success: false,  data: null, error: ['could not delete data', e.message] })

  }
}
