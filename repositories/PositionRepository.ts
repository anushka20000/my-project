import { CareerPage } from "../models/CareerPage";
import { Category } from "../models/Category";
import { Position } from "../models/Position";
const date = require('date-and-time')

class PositionRepository {

    //GET
    async list() {
      try {
        const res = await Position.findAll({
          // order: [["id", "DESC"]],
          attributes: ["id", 'title', 'category_id', 'description', 'type', 'address', 'status'],
          include: [{model: Category, attributes: ['id', 'title']}]
        });

        return { Position: res};
      } catch (e: any) {
        return { error: e };
      }
    }

    async listing() {
      try {
        const res = await Position.findAll({
          order: [["id", "DESC"]],
          attributes: ["id", 'title', 'category_id', 'description', 'type', 'address', 'status'],
          include: [{model: Category, attributes: ['id', 'title']}]
        });        
        return { Position: res};
      } catch (e: any) {
        return { error: e };
      }
    }


  // POST
  async store(input: any) {
    try {
      const now  =  new Date();
      const currentFormattedDate = date.format(now,'YYYY-MM-DD HH:mm:ss');
      const res = await Position.create({
        category_id: input.category_id.value,
        title: input.title,
        description: input.description,
        type: input.type.value,
        address: input.address,
        status: input.status.value,
        createdAt : currentFormattedDate, 
        updatedAt : currentFormattedDate, 
        deletedAt : null
      });
    } catch (e: any) {
      return { error: e.errors[0].message };
    }
  }

  async edit(id:bigint){
    try {
      const res = await Position.findOne({
        order: [["id", "DESC"]],
        attributes: ["id", "title", 'category_id', 'description', 'type', 'address', 'status'],
        where: {id: id},
        include: [{model: Category, attributes: ['id', 'title']}]
      });
      return { Position: res };
    } catch (e: any) {
      return { error: e };
    }
  }

  //UPDATE
  async update(input: any) {
    try {
      const res = await Position.findOne({where: {id: input.id}})
       if(res){
        const list = await Position.update({
          category_id: input.category_id.value,
          title: input.title,
          description: input.description,
          type: input.type.value,
          address: input.address,
          status: input.status.value
        },{ where: { id: input.id } })}   
  
    } catch (e: any) {
      return { error: e.errors[0].message };
    }
  }
  // //DELETE
  async delete(id: bigint) {
    const val = await Position.findOne({ where: { id: id } });
    if (!val) {
      throw new Error("id not found");
    } else if (val) {
      try {
        const res = await Position.destroy({ where: { id: id } });  
        return { body: res };
      } catch (e: any) {
        return { error: e };
      }
    }
  }

}

export { PositionRepository };
