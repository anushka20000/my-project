import  Express , {Request,Response} from "express";
import { ContactRepository } from "../repositories/ContactRepository";
import { Contact } from "../models/Contact";

const repository = new ContactRepository()

const saveContact = async (req: Request, res: Response) =>{
    try{
        const created = await repository.store({...req.body})
        return res.status(201).json({success: true, data:created})
    }catch(e:any){
        res.status(422).json({success: false, error: ['could not create data',e.message]})
    }
}

const listContact = async (req: Request, res: Response) => {
    try{
        const datas = await repository.list()
        return res.status(200).json({success:true, data:datas})
    }catch(e:any){
      res.status(404).json({error: ['could not read data',e.message]})
    }
  
    };
    const editContact = async (req: Request, res: Response) => {
      const id: any = req.params.id
      try {
        const datas = await repository.edit(id)
        return res.json({ success: true, data: datas })
      } catch (e: any) {
        res.status(404).json({ success: false, error: e.message })
      }
    };
    const updateContact= async (req: Request, res: Response) => {
    
      try{
        await repository.update(req.body)
    
        return res.status(200).json({success: true})
      }catch(e:any){
          res.status(422).json({success:false, error: ['could not update data',e.message]})
      }
  
  };
    const destroyContact = async (req: Request, res: Response) => {
        const id: any= req.params.id;
        
        try{
          const deletes = await Contact.findByPk(id);
          await repository.delete(id)
          return res.status(200).json({success: true,data:deletes})
        }catch(e:any){
          res.status(422).json({success: false,error: ['could not delete data',e.message]})
      }
     
      }; 
    export {listContact, saveContact, destroyContact, editContact, updateContact}