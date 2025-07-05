import { Client } from "../models/Client";
const date = require('date-and-time')

class ClientRepository {

    //GET
    async list() {
      try {
        const res = await Client.findAll({
          // order: [["id", "DESC"]]
        });
        return { Client: res};
      } catch (e: any) {
        return { error: e };
      }
    }


  // POST
  async store(input: any) {
             try {
            const now  =  new Date();
            const currentFormattedDate = date.format(now,'YYYY-MM-DD HH:mm:ss');
            const res = await Client.create(input);
          } catch (e: any) {
            return { error: e.errors[0].message };
          }

  }

  async edit(id:bigint){
    try {
      const res = await Client.findOne({
        where: {id: id},
      });
      return { Client: res };
    } catch (e: any) {
      return { error: e };
    }
  }

  //UPDATE
  async update(input: any) {
   
          try {
            const res = await Client.findOne({where: {id: input.id}})
             if(res){
              const list = await Client.update(input,{ where: { id: input.id } })}   
        
          } catch (e: any) {
            return { error: e.errors[0].message };
          }
  }
  // //DELETE
  async delete(id: bigint) {
    const val = await Client.findOne({ where: { id: id } });
    if (!val) {
      throw new Error("id not found");
    } else if (val) {
      try {
        const res = await Client.destroy({ where: { id: id } });  
        return { body: res };
      } catch (e: any) {
        return { error: e };
      }
    }
  }

}

export { ClientRepository };
