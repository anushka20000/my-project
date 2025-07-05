import { RequestHandler } from "express";
import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

const data = new CategoryRepository()

//GET 
export const listCategory: RequestHandler = async (req, res, next) => {
  try {
    const datas = await data.list()
    return res.json({ success: true, data: datas })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

export const categories: RequestHandler = async (req, res, next) => {
  const search:any = req.query.search && req.query.search != '' ? req.query.search : null;
  const location:any = req.query.location && req.query.location != '' ? req.query.location : null;

  try {
    const datas = await data.listing(search, location)
    return res.json({ success: true, data: datas })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

export const listingCategory: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id
  try {
    const datas = await data.listingById(id)
    return res.json({ success: true, data: datas })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};


//CREATE 
export const saveCategory: RequestHandler = async (req, res, next) => {

  try {
    const created = await data.store({ ...req.body })
    return res.status(201).json({ success: true })
  } catch (e: any) {
    res.status(422).json({success: false, error: ['could not create data', e.message] })
  }

};


//edit
export const editCategory: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id
  try {
    const datas = await data.edit(id)
    return res.json({ success: true, data: datas })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};


//UPDATE 
export const updateCategory: RequestHandler = async (req, res, next) => {
  try {
    await data.update(req.body);
    return res.status(200).json({ success: true})
  } catch (e: any) {
    res.status(422).json({ error: ['could not update data', e.message] })
  }
};


//DELETE 
export const destroyCategory : RequestHandler = async (req, res, next) => {
  const id: any = req.params.id;
  try {
   
    await data.delete(id)
    return res.json({success : true})
  } catch (e: any) {
    res.status(400).json({ error: e.message })
  }
};