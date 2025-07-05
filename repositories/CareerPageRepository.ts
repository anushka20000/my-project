import { CareerPage, CareerPageMembers} from "../models/CareerPage";

export class CareerPageRepository {
    async edit(id: bigint) {
        try {
            const res = await CareerPage.findOne({
                where: {
                    id: id
                },
                // attributes: ['id', 'meta_title', 'meta_keywords', 'meta_image', 'meta_description']
            });
            return { res };
        } catch (e: any) {
            return { error: e };
        }
    }
    async listingDetails() {
        try {
            const career = await CareerPage.findOne();
            return {career};

        } catch (e: any) {
            return {error: e};
        }
    }
    async update(req) {
        const data = req.body.data;
        try {
            await CareerPage.update(data, { where: { id: 1 } })
        } catch (e: any) {
            return { error: e };
        }
    }
    async careerSeo() {
        let seo;
        try {
          seo = await CareerPage.findOne({ attributes: ["id", "meta_title", "meta_image", "meta_keywords", "meta_description"]})
        } catch (e: any) {
          return e;
        }
        return { seo };
      }
}
