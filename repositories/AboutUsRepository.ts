import { Certificate } from "../models/Certificate";
import { AboutUs, AboutUsMembers } from "../models/AboutUs";
import { Event } from "../models/Event";
import { Testimonial } from "../models/Testimonial";
import { Op } from "sequelize";

export class AboutUsRepository {
  async list() {
      try {
          const res = await AboutUs.findOne({
              order: [["id", "DESC"]],
              include: [{model: Certificate}, {model: Event}]
              // attributes: ['id', 'section_one_description', 'section_one_image', 'section_one_heading', 'section_two_description', 'section_two_image', 'section_two_heading', 'what_happening_description', 'career_description']
          });
          return {res};
      } catch (e: any) {
          return {error: e};
      }
  }

    async listingDetails() {
        try {
            const aboutUs = await AboutUs.findOne({
                order: [["id", "DESC"]],
                // attributes: ['id', 'section_one_description', 'section_one_image', 'section_one_heading', 'section_two_description', 'section_two_image', 'section_two_heading', 'what_happening_description', 'career_description']
            });

            const testimonial = await Testimonial.findAll({attributes: ["id", 'name', 'image', 'designation', 'comment', 'status']})
            const certificate = await Certificate.findAll({attributes: ['id', 'image']})
            const event = await Event.findAll({attributes: ['id', 'image']})
            return {aboutUs, testimonial, certificate, event};

        } catch (e: any) {
            return {error: e};
        }
    }

    async edit(id: bigint) {
        try {
            const res = await AboutUs.findOne({
                where: {
                    id: id
                },
                // attributes: ['id', 'section_one_description', 'section_one_image', 'section_one_heading', 'section_two_description', 'section_two_image', 'section_two_heading', 'what_happening_description', 'career_description']
            });
            const certificate = await Certificate.findAll({attributes: ['id', 'image']})
            const event = await Event.findAll({attributes: ['id', 'image']})
            return {res, certificate, event};
        } catch (e: any) {
            return {error: e};
        }
    }

    async update(req: any) {
        const data = req.data;
        try {
            await AboutUs.update(data, {where: {id: 1}})

            data.imagesAdd.map(async (data: any) => {
                await Event.create({
                    about_us_id: data.id,
                    image: data
                })
            })
            data.galleries.map(async (item: any)=> {
                await Certificate.create({
                    about_us_id: data.id,
                    image: item
                })
            })
            // to remove gallery

            data.GalleriesRemove.map(async (data) => {
                await Certificate.destroy({ where: { image: data } })
            })
            data.ImagesRemove.map(async (data) => {
                await Event.destroy({ where: { image: data } })
            })
        } catch (e: any) {
            return {error: e};
        }
    }

    async aboutSeo() {
        let seo;
        try {
          seo = await AboutUs.findOne({ attributes: ["id", "meta_title", "meta_image", "meta_keywords", "meta_description"]})
        } catch (e: any) {
          return e;
        }
        return { seo };
      }
}
