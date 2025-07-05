import {Certificate} from "../models/Certificate";
import {Process, ProcessMembers} from "../models/Process";
import {Event} from "../models/Event";

export class ProcessRepository {
    async list() {
        try {
            const res: Process[] = await Process.findAll({
                order: [["id", "DESC"]],
                // attributes: ['id', 'section_one_description', 'section_one_image', 'section_one_heading', 'section_two_description', 'section_two_image', 'section_two_heading', 'what_happening_description', 'career_description']
            });
            return {res};
        } catch (e: any) {
            return {error: e};
        }
    }

    async listing() {
        try {
            const process = await Process.findOne({
                order: [["id", "DESC"]],
                // attributes: ['id', 'section_one_description', 'section_one_image', 'section_one_heading', 'section_two_description', 'section_two_image', 'section_two_heading', 'what_happening_description', 'career_description']
            });
            return {process};
        } catch (e: any) {
            return {error: e};
        }
    }

    async edit(id: bigint) {
        try {
            const res = await Process.findOne({
                where: {
                    id: id
                },
                // attributes: ['id', 'section_one_description', 'section_one_image', 'section_one_heading', 'section_two_description', 'section_two_image', 'section_two_heading', 'what_happening_description', 'career_description']
            });
            return {res};
        } catch (e: any) {
            return {error: e};
        }
    }

    async update(data: any) {
        try {
            await Process.update(data, {where: {id: 1}});

            await Certificate.create({
                about_us_id: data.id,
                image: data.image
            })

            await Event.create({
                about_us_id: data.id,
                image: data.image
            })
        } catch (e: any) {
            return {error: e};
        }
    }

    async processSeo() {
        let seo;
        try {
          seo = await Process.findOne({ attributes: ["id", "meta_title", "meta_image", "meta_keywords", "meta_description"]})
        } catch (e: any) {
          return e;
        }
        return { seo };
      }
}
