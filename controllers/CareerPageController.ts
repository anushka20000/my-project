import { RequestHandler } from "express";
import { CareerPageRepository } from "../repositories/CareerPageRepository";

const repo = new CareerPageRepository()
//edit
export const editCareerPage: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id
  try {
    const data = await repo.edit(id)
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};
export const listingCareerPage: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.listingDetails()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//UPDATE
export const updateCareerPage: RequestHandler = async (req, res, next) => {
  try {
    await repo.update(req);
    return res.status(200).json({ success: true})
  } catch (e: any) {
    res.status(422).json({ error: ['could not update data', e.message] })
  }
};

export const seoCareerPage: RequestHandler = async (req, res, next) => {
  try {
    const seo = await repo.careerSeo();
    return res.status(200).json({ success: true, data: seo})
  } catch (e: any) {
    res.status(422).json({ success: false,  data: null, error: ['could not delete data', e.message] })

  }
}
