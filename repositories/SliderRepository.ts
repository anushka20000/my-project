import { Slider, SliderMembers } from "../models/Slider";

export class SliderRepository {
  async list() {
    try {
      const res = await Slider.findOne({
        order: [["id", "DESC"]],
        // attributes: ['id', 'desktop_image', 'tab_image', 'mobile_image', 'mobile_video', 'tab_video', 'desktop_video']
      });
      return { res };
    } catch (e: any) {
      return { error: e };
    }
  }

  async store(post: SliderMembers) {
    try {
      await Slider.create(post)
    } catch (e: any) {
      return { error: e };
    }
  }

  async edit(id: bigint) {
    try {
      const res = await Slider.findOne({
        where: {
          id: id
        }
      });
      return { res };
    } catch (e: any) {
      return { error: e };
    }
  }

  async update(post: any) {
    console.log(post)
    try {
      await Slider.update(post, { where: { id: 1 } });
    } catch (e: any) {
      return { error: e.errors[0].message };
    }


  }
  async delete(id: bigint) {
    try {
      const res = await Slider.destroy({ where: { id: id } });
      return { body: res };
    } catch (e: any) {
      return { error: e };
    }
  }
}
