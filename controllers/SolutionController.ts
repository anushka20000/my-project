import { RequestHandler } from "express";
import { SolutionRepository } from "../repositories/SolutionRepository";

const repo = new SolutionRepository()

//GET 
export const listSolution: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.list();
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//GET 
export const listingSolution: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.list();
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};

//edit
export const editSolution: RequestHandler = async (req, res, next) => {
  const id:any = req.params.id;
  try {
    const data = await repo.edit(id)
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};


//UPDATE 
export const updateSolution: RequestHandler = async (req, res, next) => {
  try {
    await repo.update(req.body);
    return res.status(200).json({ success: true})
  } catch (e: any) {
    res.status(422).json({ error: ['could not update data', e.message] })
  }
};

export const solutionDetails: RequestHandler = async (req, res, next) => {
  try {
    const data = await repo.solutionDetails()
    return res.json({ success: true, data: data })
  } catch (e: any) {
    res.status(404).json({ success: false, error: e.message })
  }
};
export const seoSolution: RequestHandler = async (req, res, next) => {
  try {
    const seo = await repo.solutionSeo();
    return res.status(200).json({ success: true, data: seo})
  } catch (e: any) {
    res.status(422).json({ success: false,  data: null, error: ['could not delete data', e.message] })

  }
}
