import {Certificate} from "../models/Certificate";
import {Solution, SolutionMembers} from "../models/Solution";
import {Event} from "../models/Event";
import {Service} from "../models/Service";
import {ProjectHighlight} from "../models/ProjectHighlight";
import { Client } from "../models/Client";

export class SolutionRepository {
    async list() {
        try {
            const res: Solution[] = await Solution.findAll({
                order: [["id", "DESC"]]
            });
            return {res};
        } catch (e: any) {
            return {error: e};
        }
    }

    async edit(id: bigint) {
        try {
            const res = await Solution.findOne({
                where: {id: id}
            });
            return {res};
        } catch (e: any) {
            return {error: e};
        }
    }

    async update(post: any) {
        try {
            await Solution.update(post.data, {where: {id: 1}})
        } catch (e: any) {
            return {error: e};
        }
    }
    async solutionDetails() {
        try {
            const solution: Solution = await Solution.findOne({
                order: [["id", "DESC"]]
            });

            const services = await Service.findAll({
                order: [["id", "ASC"]],
                attributes: ["id", 'heading', 'description', 'image', 'status']
            });

            const projects = await ProjectHighlight.findAll({
                // order: [["id", "DESC"]],
                // attributes: ["id", 'description', 'image', 'status', 'year', 'address', 'solution_id']
            });
            const clients = await Client.findAll();
            return {solution, services, projects, clients};
        } catch (e: any) {
            return {error: e};
        }
    }
    async solutionSeo() {
        let seo;
        try {
          seo = await Solution.findOne({ attributes: ["id", "meta_title", "meta_image", "meta_keywords", "meta_description"]})
        } catch (e: any) {
          return e;
        }
        return { seo };
      }
}
