import { ProcessSlider, ProcessSliderMembers } from "../models/ProcessSlider";
import { Slider } from "../models/Slider";
import { Story } from "../models/Story";
import {text} from "aws-sdk/clients/customerprofiles";


export class ProcessSliderRepository {
  async list() {
    try {
      const res: ProcessSlider[] = await ProcessSlider.findAll({
        // order: [["id", "DESC"]],
        attributes: ['id', 'image', 'description','name', 'status', 'type']       
      });
      return { res };
    } catch (e: any) {
      return { error: e };
    }
  }
  async listing() {
    try {
      const processSlider: ProcessSlider[] = await ProcessSlider.findAll({
        where: {status: 1},
        // order: [["id", "DESC"]],
        attributes: ['id', 'image', 'description', 'status', 'type']
      });
      return { processSlider };
    } catch (e: any) {
      return { error: e };
    }
  }

  async edit(id: bigint) {
    try {
      const res = await ProcessSlider.findOne({
        where: {
          id: id
        },
        attributes: ['id', 'image', 'description','name', 'status', 'type']
      });
      return { res };
    } catch (e: any) {
      return { error: e };
    }
  }
  async store(post: any) {
      try {
        await ProcessSlider.create({
          description : post.description,
          image: post.image,
          status : post.status.value
        });
        return { body: true };
      } catch (e: any) {
        return { error: e };
      }
  }
  async update(post: any) {
      try {
        await ProcessSlider.update({
          description : post.description,
          image: post.image,
          status : post.status.value,
          name: post.name
        }, { where: { id: post.id } });
        return { body: true };
      } catch (e: any) {
        return { error: e };
      }
  }

  async delete(id: bigint) {
      try {
        const res = await ProcessSlider.destroy({ where: { id: id } });
        return { body: res };
      } catch (e: any) {
        return { error: e };
      }
  }
}
