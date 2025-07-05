import { Category } from "../models/Category";
import { Testimonial } from "../models/Testimonial";
const date = require('date-and-time')

class TestimonialRepository {

    //GET
    async list() {
      try {
        const res = await Testimonial.findAll({
          // order: [["id", "DESC"]],
          attributes: ["id", 'name', 'image', 'designation', 'comment', 'status'],
         
        });
        return { Testimonial: res};
      } catch (e: any) {
        return { error: e };
      }
    }


  // POST
  async store(input: any) {
             try {
            const now  =  new Date();
            const currentFormattedDate = date.format(now,'YYYY-MM-DD HH:mm:ss');
            const res = await Testimonial.create(input);
          } catch (e: any) {
            return { error: e.errors[0].message };
          }

  }

  async edit(id:bigint){
    try {
      const res = await Testimonial.findOne({
        order: [["id", "DESC"]],
        attributes: ["id", 'name', 'image', 'designation', 'comment', 'status'],
        where: {id: id},
  
      });
      return { Testimonial: res };
    } catch (e: any) {
      return { error: e };
    }
  }

  //UPDATE
  async update(input: any) {
   
          try {
            const res = await Testimonial.findOne({where: {id: input.id}})
             if(res){
              const list = await Testimonial.update(input,{ where: { id: input.id } })}   
        
          } catch (e: any) {
            return { error: e.errors[0].message };
          }
  }
  // //DELETE
  async delete(id: bigint) {
    const val = await Testimonial.findOne({ where: { id: id } });
    if (!val) {
      throw new Error("id not found");
    } else if (val) {
      try {
        const res = await Testimonial.destroy({ where: { id: id } });  
        return { body: res };
      } catch (e: any) {
        return { error: e };
      }
    }
  }

}

export { TestimonialRepository };
