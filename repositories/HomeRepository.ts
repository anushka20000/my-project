import { Home, HomeMembers } from "../models/Home";
import { Slider } from "../models/Slider";
import { Story } from "../models/Story";
import {text} from "aws-sdk/clients/customerprofiles";


export class HomeRepository {
  async list() {
    try {
      const res: Home[] = await Home.findAll({
        order: [["id", "DESC"]],
        attributes: ['id', 'section_one_description', 'section_two_description', 'section_two_image', 'section_two_heading', 'section_three_heading', 'section_four_sub_heading_one', 'section_four_sub_heading_two', 'section_four_sub_heading_three', 'section_four_count_one', 'section_four_count_two', 'section_four_count_three', 'section_four_heading', 'section_five_heading']       
      });
      return { res };
    } catch (e: any) {
      return { error: e };
    }
  }
  async listing() {
    try {
      const home= await Home.findOne({
        order: [["id", "DESC"]],
        attributes: ['id', 'section_one_description', 'section_two_description', 'section_two_image', 'section_two_heading', 'section_three_heading', 'section_four_sub_heading_one', 'section_four_sub_heading_two', 'section_four_sub_heading_three', 'section_four_count_one', 'section_four_count_two', 'section_four_count_three', 'section_four_heading', 'section_five_heading', 'meta_title','section_one_heading', 'meta_keywords', 'meta_image', 'meta_description']
      });
      const slider = await Slider.findOne({
        attributes: ['id', 'desktop_image', 'tab_image', 'mobile_image']
      })

      const story = await Story.findOne()
      return { home, slider, story };
    } catch (e: any) {
      return { error: e };
    }
  }

  async edit(id: bigint) {
    try {
      const res = await Home.findOne({
        where: {
          id: id
        },
        attributes: [
            'id', 'section_one_description', 'section_two_description', 'section_two_image', 'section_two_heading', 'section_three_heading', 'section_four_sub_heading_one', 'section_four_sub_heading_two', 'section_four_sub_heading_three', 'section_four_count_one', 'section_four_count_two', 'section_four_count_three', 'section_four_heading', 'section_five_heading', 'section_one_heading', 'meta_title', 'meta_keywords', 'meta_image', 'meta_description']
      });
      return { res };
    } catch (e: any) {
      return { error: e };
    }
  }

  async update(post: any) {
    const data = post.data;
      try {
        await Home.update(data, { where: { id: post.data.id } });
        return { body: true };
      } catch (e: any) {
        return { error: e };
      }
  }

  async delete(id: bigint) {
      try {
        const res = await Home.destroy({ where: { id: id } });
        return { body: res };
      } catch (e: any) {
        return { error: e };
      }
  }

  async homeSeo() {
    let seo;
    try {
      seo = await Home.findOne({ attributes: ["id", "meta_title", "meta_image", "meta_keywords", "meta_description"]})
    } catch (e: any) {
      return e;
    }
    return { seo };
  }
}
