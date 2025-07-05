import { ContactPage, ContactPageMembers} from "../models/ContactPage";

export class ContactPageRepository {
    async edit(id: bigint) {
        try {
            const res = await ContactPage.findOne({
                where: {
                    id: id
                },
                attributes: ['id', 'meta_title', 'meta_keywords', 'meta_image', 'meta_description']
            });
            return { res };
        } catch (e: any) {
            return { error: e };
        }
    }

    async update(req) {
        const data = req.body.data;
        try {
            await ContactPage.update(data, { where: { id: 1 } })
        } catch (e: any) {
            return { error: e };
        }
    }

    async contactSeo() {
        let seo;
        try {
          seo = await ContactPage.findOne({ attributes: ["id", "meta_title", "meta_image", "meta_keywords", "meta_description"]})
        } catch (e: any) {
          return e;
        }
        return { seo };
      }
}
