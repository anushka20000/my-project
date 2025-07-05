import {Certificate} from "../models/Certificate";
import {ProjectHighlight, ProjectHighlightMembers} from "../models/ProjectHighlight";


export class ProjectHighlightRepository {
    async list() {
        try {
            const Project: ProjectHighlight[] = await ProjectHighlight.findAll({
            });
            return {Project};
        } catch (e: any) {
            return {error: e};
        }
    }

    async store(input: any) {
        const post = input.postData;
        try {
            const res = await ProjectHighlight.create({
                image: post.image,
                description: post.description,
                address: post.address,
                year: post.year,
                solution_id: post.solution_id,
                status: post.status.value,
                key1: post.key1,
                key2: post.key2,
                key3: post.key3,
                key4: post.key4,
                key5: post.key5,
                key6: post.key6,
                key7: post.key7,
                key8: post.key8,
                key9: post.key9,
                key10: post.key10,
                value1: post.value1,
                value2: post.value2,
                value3: post.value3,
                value4: post.value4,
                value5: post.value5,
                value6: post.value6,
                value7: post.value7,
                value8: post.value8,
                value9: post.value9,
                value10: post.value10,
            })
        } catch (e: any) {
            return {error: e};
        }
    }

    async edit(id: bigint) {
        try {
            const res = await ProjectHighlight.findOne({
                where: {id: id}
            });
            return {res};
        } catch (e: any) {
            return {error: e};
        }
    }

    async update(input: any) {
        const post = input.postData
        try {

            await ProjectHighlight.update({
                image: post.image,
                description: post.description,
                address: post.address,
                year: post.year,
                solution_id: post.solution_id,
                status: post.status.value,
                key1: post.key1,
                key2: post.key2,
                key3: post.key3,
                key4: post.key4,
                key5: post.key5,
                key6: post.key6,
                key7: post.key7,
                key8: post.key8,
                key9: post.key9,
                key10: post.key10,
                value1: post.value1,
                value2: post.value2,
                value3: post.value3,
                value4: post.value4,
                value5: post.value5,
                value6: post.value6,
                value7: post.value7,
                value8: post.value8,
                value9: post.value9,
                value10: post.value10,
            }, {where: {id: post.id}})

        } catch (e: any) {
            return {error: e};
        }

    }

    async delete(id: bigint) {
        try {
            const res = await ProjectHighlight.destroy({where: {id: id}});
            return {body: res};
        } catch (e: any) {
            return {error: e};
        }
    }

}
