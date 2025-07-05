import { RequestHandler } from "express";
import { ProjectHighlight } from "../models/ProjectHighlight";
import { ProjectHighlightRepository } from "../repositories/ProjectHighlightRepository";

const repo = new ProjectHighlightRepository()

//GET 
export const listProjectHighlight: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.list()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//CREATE 
export const saveProjectHighlight: RequestHandler = async (req, res, next) => {

  try {
    await repo.store(req.body)
    return res.status(201).json({ success: true })
  } catch (e: any) {
    res.status(422).json({success: false, error: ['could not create data', e.message] })
  }

};


//edit
export const editProjectHighlight: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id
  try {
    const data = await repo.edit(id)
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};


//UPDATE 
export const updateProjectHighlight: RequestHandler = async (req, res, next) => {
  try {
    await repo.update(req.body);
    return res.status(200).json({ success: true})
  } catch (e: any) {
    res.status(422).json({ error: ['could not update data', e.message] })
  }
};


//DELETE 
export const destroyProjectHighlight : RequestHandler = async (req, res, next) => {
  const id: any = req.params.id;
  try {
   
    await repo.delete(id)
    return res.json({success : true})
  } catch (e: any) {
    res.status(400).json({ error: e.message })
  }
};