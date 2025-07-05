import { RequestHandler } from "express";
import { StoryRepository } from "../repositories/StoryRepository";

const repo = new StoryRepository()

//GET 
export const listStory: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.list()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//GET 
export const listingStory: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.listing()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//CREATE 
export const saveStory: RequestHandler = async (req, res, next) => {

  try {
    const created = await repo.store({ ...req.body }, req.files)
    return res.status(201).json({ success: true })
  } catch (e: any) {
    res.status(422).json({success: false, error: ['could not create data', e.message] })
  }

};


//edit
export const editStory: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id
  try {
    const data = await repo.edit(id)
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};


//UPDATE 
export const updateStory: RequestHandler = async (req, res, next) => {
  try {
    await repo.update(req);
    return res.status(200).json({ success: true})
  } catch (e: any) {
    res.status(422).json({ error: ['could not update data', e.message] })
  }
};


//DELETE 
export const destroyStory : RequestHandler = async (req, res, next) => {
  const id: any = req.params.id;
  try {
   
    await repo.delete(id)
    return res.json({success : true})
  } catch (e: any) {
    res.status(400).json({ error: e.message })
  }
};

export const seoStory: RequestHandler = async (req, res, next) => {
  try {
    const seo = await repo.storySeo();
    return res.status(200).json({ success: true, data: seo})
  } catch (e: any) {
    res.status(422).json({ success: false,  data: null, error: ['could not delete data', e.message] })

  }
}