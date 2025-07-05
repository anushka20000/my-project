import { Category } from "../models/Category";
import { Service } from "../models/Service";
const date = require('date-and-time')

class ServiceRepository {

    //GET
    async list() {
      try {
        const res = await Service.findAll({
          // order: [["id", "DESC"]],
          attributes: ["id", 'heading', 'description', 'image', 'status']
        });
        return { Service: res};
      } catch (e: any) {
        return { error: e };
      }
    }

  // POST
  async store(input: any) {
    try {
      const now  =  new Date();
      const currentFormattedDate = date.format(now,'YYYY-MM-DD HH:mm:ss');
      const res = await Service.create({
        heading: input.heading,
        description: input.description,
        image: input.type.image,
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
      const res = await Service.findOne({
        order: [["id", "DESC"]],
        attributes: ["id", 'heading', 'description', 'image', 'status'],
        where: {id: id}
      });
      return { Service: res };
    } catch (e: any) {
      return { error: e };
    }
  }

  //UPDATE
  async update(input: any) {
    try {
      console.log(input)
      const res = await Service.findOne({where: {id: input.id}})
       if(res){
        const list = await Service.update({
            heading: input.heading,
            description: input.description,
            image: input.image,
            status: input.status.value
        },{ where: { id: input.id } })}   
  
    } catch (e: any) {
      return { error: e.errors[0].message };
    }
  }
  // //DELETE
  async delete(id: bigint) {
    const val = await Service.findOne({ where: { id: id } });
    if (!val) {
      throw new Error("id not found");
    } else if (val) {
      try {
        const res = await Service.destroy({ where: { id: id } });  
        return { body: res };
      } catch (e: any) {
        return { error: e };
      }
    }
  }

}

export { ServiceRepository };
