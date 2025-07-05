import { Op } from "sequelize";
import { Category } from "../models/Category";
import { Position } from "../models/Position";
const date = require('date-and-time')

class CategoryRepository {

    //GET
    async list() {
      try {
        const res = await Category.findAll({
          // order: [["id", "DESC"]],
          attributes: ["id", 'title', 'status']
        });
        return { Category: res };
      } catch (e: any) {
        return { error: e };
      }
    }


  // POST
  async store(input: any) {
    try {
      const now  =  new Date();
      const currentFormattedDate = date.format(now,'YYYY-MM-DD HH:mm:ss');
      
      const res = await Category.create({
        title: input.title,
        status: input.status,
        createdAt : currentFormattedDate, 
        updatedAt : currentFormattedDate, 
        deletedAt : null
      });      
    } catch (e: any) {
      return { error: e.errors[0].message };
    }
  }

  async edit(id: bigint){
    try {
      const res = await Category.findOne({
        attributes: ["id", 'title', 'status'],
        where: {
          id: id
        }
      });
      return { Category: res };
    } catch (e: any) {
      return { error: e };
    }
  }

  //UPDATE
  async update(input: any) {
    try {
      const res = await Category.findOne({where: {id: input.id}})
      if(res){
        await Category.update(input, {where: {id: input.id}})      
      }
    } catch (e: any) {
      return { error: e.errors[0].message };
    }
  }
  // //DELETE
  async delete(id: bigint) {
    const val = await Category.findOne({ where: { id: id } });
    if (!val) {
      throw new Error("id not found");
    } else if (val) {
      try {
        const res = await Category.destroy({ where: { id: id } });
        return { body: res };
      } catch (e: any) {
        return { error: e };
      }
    }
  }
  async listing(search:any, location:any) {
    try {
      const res = await Category.findAll({
        attributes: ["id", 'title', 'status'],
        include: [{model: Position, attributes: ['id', 'category_id', 'title', 'description', 'type', 'address', 'status'], where: search != null ? { title: { [Op.like]: `%${search}%`}, description: { [Op.like]: `%${search}%`}}: location != null ? {address: { [Op.like]: `%${location}%`}}: {},}]
       
      });
      return { Category: res };
    } catch (e: any) {
      return { error: e };
    }
  }
  async listingById(id:any) {
    try {
      const res = await Category.findAll({
        attributes: ["id", 'title', 'status'],
        include: [{model: Position, where: {id: id}, attributes: ['id', 'category_id', 'title', 'description', 'type', 'address', 'status']}]
       
      });
      return { Category: res };
    } catch (e: any) {
      return { error: e };
    }
  }



}
export { CategoryRepository };
