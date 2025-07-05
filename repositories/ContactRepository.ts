import {Contact} from "../models/Contact";
import EmailConfig from '../config/mail-config';
import MailTemplate from "../views/ContactMailTemplate";

export class ContactRepository {
    async list() {
        try {
            const res: Contact[] = await Contact.findAll({
                order: [["id", "DESC"]],
                attributes: ['id', 'name', 'email', 'phone', 'subject', 'message', 'status', 'createdAt']
            });
            return {Contact: res};
        } catch (e: any) {
            return {error: e};
        }
    }
    async edit(id: bigint) {
        try {
            const res = await Contact.findOne({
                where: {
                    id: id
                }
            });
            return {res};
        } catch (e: any) {
            return {error: e};
        }
    }
    async store(input: any) {
        try {
            const subject = 'Contact us';
            const res = await Contact.create({
                name: input.name,
                phone: input.phone_number,
                email: input.email,
                message: input.message,
                subject: input.subject
            });
            if (res) {
                // const mailOptions = {
                //     from: process.env.EMAIL_FROM,
                //     to: input.email,
                //     subject: subject,
                //     html: MailTemplate(input)
                // }
                const mailOptions = {
                    from: input.email,
                    to: "info@harbauer.in",
                    subject: subject,
                    html: MailTemplate(input)
                }
                console.log('Check mail');
                EmailConfig.sendMail(mailOptions, function (err, data) {
                    if (err) {
                        console.log(err)
                    }
                })

                /*console.log(mailOptions)
                EmailConfig.sendMail(mailOptions, function (err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(data)
                    }
                })*/
            }
        } catch (e: any) {
            return {error: e.errors[0].message};
        }
    }
    async update(input: any) {
        try {
            const res = await Contact.update({status: input.status.value}, {where: {id: input.id}});
            return {body: res};
        } catch (e: any) {
            return {error: e};
        }
    }
    async delete(id: bigint) {
        try {
            const res = await Contact.destroy({where: {id: id}});
            return {body: res};
        } catch (e: any) {
            return {error: e};
        }
    }
}
