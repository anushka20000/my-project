import { Story, StoryMembers } from "../models/Story";

export class StoryRepository {
  async list() {
    try {
      const res: Story[] = await Story.findAll({
        order: [["id", "DESC"]],
        attributes: ['id', 'section_one_description', 'section_two_heading', 'section_two_description', 'section_two_image', 'section_three_heading', 'section_three_description', 'section_three_image', 'section_four_heading', 'section_five_heading', 'section_four_description', 'section_four_image','section_five_image', 'section_five_description', 'section_six_description']
      });
      return { res };
    } catch (e: any) {
      return { error: e };
    }
  }
  async listing() {
    try {
      const story = await Story.findOne({
        order: [["id", "DESC"]],
        attributes: ['id', 'section_one_description', 'section_two_heading', 'section_two_description', 'section_two_image', 'section_three_heading', 'section_three_description', 'section_three_image', 'section_four_heading', 'section_five_heading', 'section_four_description', 'section_four_image','section_five_image', 'section_five_description', 'section_six_description']
      });
      return { story };
    } catch (e: any) {
      return { error: e };
    }
  }

  async store(post: StoryMembers, files: any) {
  //
  }

  async edit(id: bigint) {
    try {
      const res = await Story.findOne({
        where: {
          id: id
        },
        // attributes: ['id', 'section_one_description', 'section_two_heading', 'section_two_description', 'section_two_image', 'section_three_heading', 'section_three_description', 'section_three_image', 'section_four_heading', 'section_five_heading', 'section_four_description', 'section_four_image','section_five_image', 'section_five_description', 'section_six_description', 'meta_title', 'meta_keywords', 'meta_image', 'meta_description']
      });
      return { res };
    } catch (e: any) {
      return { error: e };
    }
  }

  async update(req) {
    const post = req.body;
    try {
      await Story.update(post, { where: { id: 1 } })
    } catch (e: any) {
      return { error: e };
    }
  }

  async delete(id: bigint) {
    try {
      const res = await Story.destroy({ where: { id: id } });
      return { body: res };
    } catch (e: any) {
      return { error: e };
    }
  }
  async storySeo() {
    let seo;
    try {
      seo = await Story.findOne({ attributes: ["id", "meta_title", "meta_image", "meta_keywords", "meta_description"]})
    } catch (e: any) {
      return e;
    }
    return { seo };
  }
}
