import {Applicant, ApplicantMembers} from "../models/Applicant";
import {Position} from "../models/Position";
import JobApplyMailTemplate from "../views/ApplyJobMailTemplate";
import EmailConfig from '../config/mail-config';

export class ApplicantRepository {
    async list() {
        try {
            const res: Applicant[] = await Applicant.findAll({
                // order: [["id", "DESC"]],
                attributes: ['id', 'name', 'email', 'phone', 'position_id'],
                include: [{model: Position, attributes: ['id', 'title']}]
            });
            return {res};
        } catch (e: any) {
            return {error: e};
        }
    }

    async store(post: any) {
        try {
            const subject = 'Job Application';
            const res = await Applicant.create({
                resume: post.resume,
                position_id: post.position_id,
                expected_salary: post.expected_salary,
                current_salary: post.current_salary,
                name: post.name,
                email: post.email,
                notice_period: post.notice_period,
                subject: post.subject,
                phone: post.phone
            })
            if (res) {
                const mailOptions = {
                    from: process.env.EMAIL_FROM,
                    to: post.email,
                    subject: subject,
                    html: JobApplyMailTemplate(post)
                }
                EmailConfig.sendMail(mailOptions, function (err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(data)
                    }
                })
            }
        } catch (e: any) {
            return {error: e};
        }
    }

    async edit(id: bigint) {
        try {
            const res = await Applicant.findOne({
                where: {
                    id: id
                },
                include: [{
                    model: Position,
                    attributes: ["id", 'title', 'category_id', 'description', 'type', 'address', 'status']
                }]
            });
            return {res};
        } catch (e: any) {
            return {error: e};
        }
    }

    async update(post: ApplicantMembers) {
        try {
            const res = await Applicant.update(post, {where: {id: post.id}});
            return {body: res};
        } catch (e: any) {
            return {error: e};
        }
    }

    async delete(id: bigint) {
        try {
            const res = await Applicant.destroy({where: {id: id}});
            return {body: res};
        } catch (e: any) {
            return {error: e};
        }
    }
}
