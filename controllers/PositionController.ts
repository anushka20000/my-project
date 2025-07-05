import  Express , {Request,Response} from "express";
import { PositionRepository } from "../repositories/PositionRepository";
import { Position } from "../models/Position";

const repository = new PositionRepository()

const savePosition = async (req: Request, res: Response) =>{
    try{
        const created = await repository.store({...req.body})
        return res.status(201).json({success: true, data:created})
    }catch(e:any){
        res.status(422).json({success: false, error: ['could not create data',e.message]})
    }
}

const listPosition = async (req: Request, res: Response) => {
    try{
        const datas = await repository.list()
        return res.status(200).json({success:true, data:datas})
    }catch(e:any){
      res.status(404).json({error: ['could not read data',e.message]})
    }
  
    };

    const listingPosition = async (req: Request, res: Response) => {
      try{
          const datas = await repository.listing()
          return res.status(200).json({success:true, data:datas})
      }catch(e:any){
        res.status(404).json({error: ['could not read data',e.message]})
      }
    
      };
    const editPosition = async (req: Request, res: Response) => {
      const id: any  = req.params.id
      try{
          const datas = await repository.edit(id)
          return res.status(200).json({success:true, data:datas})
      }catch(e:any){
        res.status(404).json({success: false, error: ['could not read data',e.message]})
      }
    
      };

    const updatePosition = async (req: Request, res: Response) => {
          try{
           const data =  await repository.update(req.body)
            return res.status(200).json({success: true})
          }catch(e:any){
              res.status(422).json({error: ['could not update data',e.message]})
          }
      
      };

      const destroyPosition = async (req: Request, res: Response) => {
        const id: any= req.params.id;
        
        try{
          const deletes: Position | null = await Position.findByPk(id);
          await repository.delete(id)
          return res.status(200).json({success: true})
        }catch(e:any){
          res.status(422).json({success:false, error: ['could not delete data',e.message]})
      }
     
      };

      export {savePosition, listPosition, listingPosition, updatePosition, destroyPosition, editPosition}