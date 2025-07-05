import { RequestHandler } from "express";
import { HomeRepository } from "../repositories/HomeRepository";

const repo = new HomeRepository()

//GET 
export const listHome: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.list()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//GET 
export const listingHome: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.listing()
    return res.json({ success: true, data: { home: data.home, slider: data.slider, story: data.story } })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//edit
export const editHome: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id
  try {
    const data = await repo.edit(id)
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};


//UPDATE 
export const updateHome: RequestHandler = async (req, res, next) => {
  try {
    await repo.update(req.body);
    return res.status(200).json({ success: true})
  } catch (e: any) {
    res.status(422).json({ error: ['could not update data', e.message] })
  }
};

export const seoHome: RequestHandler = async (req, res, next) => {
  try {
    const seo = await repo.homeSeo();
    return res.status(200).json({ success: true, data: seo})
  } catch (e: any) {
    res.status(422).json({ success: false,  data: null, error: ['could not delete data', e.message] })

  }
}
