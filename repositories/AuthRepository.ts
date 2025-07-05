import * as jwt from "jsonwebtoken"
import { config } from "../config/jwt-config"
import { User } from "../models/User";
import bcrypt from "bcrypt";
import {Op} from "sequelize";

export class AuthRepository {
    async adminLogin(data) {
        /*
        const salt = await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hash(data.password, salt)

        await User.update(
            { password: hashPassword },
            { where: { id: isUserExist.dataValues.id } }
        );
        */

        if (data.email == '' || data.password == '') {
            throw new Error("Invalid credentials!");
        }

        const user = await User.findOne({
            where: {
                email: data.email,
                type: 1
            }
        });

        if (user) {
            const passwordIsValid = bcrypt.compareSync(data.password, user.dataValues.password);
            if (!passwordIsValid) {
                return { result: { token: null, error: 'Invalid password!' } }
            }

            const token = jwt.sign({ id: user.dataValues.id }, config.jwt.SECRET, { expiresIn: "30d" });
            return { result: { token: token } };
        } else {
            return { result: { token: null, error: 'Invalid credentials!' } }
        }
    }


    async getUserByEmail(email) {


        if (email == '') {
            throw new Error("Email Required!");
        }

        const user = await User.findOne({
            where: {
                email: email,
                type: 1
            }
        });

        return { result: user }
    }
    async getUserByEmailAdmin(email) {
        if (email == '') {
            throw new Error("Email Required!");
        }
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        return { result: user }
    }
    async getUserByPhoneAdmin(phone) {
        const user = await User.findOne({
            where: {
                phone: phone,
            }
        });

        return { result: user }
    }

}


