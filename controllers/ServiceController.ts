import  Express , {Request,Response} from "express";
import { ServiceRepository } from "../repositories/ServiceRepository";
import { Service } from "../models/Service";

const repository = new ServiceRepository()

const saveService = async (req: Request, res: Response) =>{
    try{
        const created = await repository.store({...req.body})
        return res.status(201).json({success: true, data:created})
    }catch(e:any){
        res.status(422).json({success: false, error: ['could not create data',e.message]})
    }
}

const listService = async (req: Request, res: Response) => {
    try{
        const datas = await repository.list()
        return res.status(200).json({success:true, data:datas})
    }catch(e:any){
      res.status(404).json({error: ['could not read data',e.message]})
    }
  
    };

    const editService = async (req: Request, res: Response) => {
      const id: any  = req.params.id
      try{
          const datas = await repository.edit(id)
          return res.status(200).json({success:true, data:datas})
      }catch(e:any){
        res.status(404).json({success: false, error: ['could not read data',e.message]})
      }
    
      };

    const updateService = async (req: Request, res: Response) => {
          try{
           const data =  await repository.update(req.body)
            return res.status(200).json({success: true})
          }catch(e:any){
              res.status(422).json({error: ['could not update data',e.message]})
          }
      
      };

      const destroyService = async (req: Request, res: Response) => {
        const id: any= req.params.id;
        
        try{
          const deletes: Service | null = await Service.findByPk(id);
          await repository.delete(id)
          return res.status(200).json({success: true})
        }catch(e:any){
          res.status(422).json({success:false, error: ['could not delete data',e.message]})
      }
     
      };

      export {saveService, listService, updateService, destroyService, editService}
