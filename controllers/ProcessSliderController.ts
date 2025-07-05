import { RequestHandler } from "express";
import { ProcessSliderRepository } from "../repositories/ProcessSliderRepository";

const repo = new ProcessSliderRepository()

//GET 
export const listProcessSlider: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.list()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//GET 
export const listingProcessSlider: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.listing()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//CREATE 
export const saveProcessSlider: RequestHandler = async (req, res, next) => {

    try {
      const created = await repo.store({ ...req.body })
      return res.status(201).json({ success: true })
    } catch (e: any) {
      res.status(422).json({success: false, error: ['could not create data', e.message] })
    }
  
  };

//edit
export const editProcessSlider: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id
  try {
    const data = await repo.edit(id)
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};


//UPDATE 
export const updateProcessSlider: RequestHandler = async (req, res, next) => {
  try {
    await repo.update(req.body);
    return res.status(200).json({ success: true})
  } catch (e: any) {
    res.status(422).json({ error: ['could not update data', e.message] })
  }
};


//DELETE 
export const destroyProcessSlider : RequestHandler = async (req, res, next) => {
    const id: any = req.params.id;
    try {
      await repo.delete(id)
      return res.json({success : true})
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  };