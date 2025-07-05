import { RequestHandler } from "express";
import { TestimonialRepository } from "../repositories/TestimonialRepository";

const data = new TestimonialRepository()

//GET 
export const listTestimonial: RequestHandler = async (req, res, next) => {
  try {
    const datas = await data.list()
    return res.json({ success: true, data: datas })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};
//GET
export const listingTestimonial: RequestHandler = async (req, res, next) => {
  try {
    const datas = await data.list()
    return res.json({ success: true, data: datas })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//CREATE 
export const saveTestimonial: RequestHandler = async (req, res, next) => {

  try {
    const created = await data.store({ ...req.body })
    return res.status(201).json({ success: true })
  } catch (e: any) {
    res.status(422).json({success: false, error: ['could not create data', e.message] })
  }

};


//edit
export const editTestimonial: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id
  try {
    const datas = await data.edit(id)
    return res.json({ success: true, data: datas })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};


//UPDATE 
export const updateTestimonial: RequestHandler = async (req, res, next) => {
  try {
    await data.update(req.body);
    return res.status(200).json({ success: true})
  } catch (e: any) {
    res.status(422).json({ error: ['could not update data', e.message] })
  }
};


//DELETE 
export const destroyTestimonial : RequestHandler = async (req, res, next) => {
  const id: any = req.params.id;
  try {
   
    await data.delete(id)
    return res.json({success : true})
  } catch (e: any) {
    res.status(400).json({ error: e.message })
  }
};