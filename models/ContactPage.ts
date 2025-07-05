import { DataTypes, Model } from 'sequelize';
import db from '../config/db';
import { Certificate } from './Certificate';
import { Event } from './Event';
import { text } from 'aws-sdk/clients/customerprofiles';

export interface ContactPageMembers {
    id: bigint;
    meta_title: string;
    meta_keywords: text;
    meta_image: string;
    meta_description: text;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class ContactPage extends Model<ContactPageMembers>{
    //
}

ContactPage.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        meta_title: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        meta_image: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        meta_description: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        meta_keywords: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: db.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: db.literal('CURRENT_TIMESTAMP')
        },
        deletedAt: {
            type: DataTypes.DATE,
            defaultValue: null
        }
    },
    {
        timestamps: true,
        paranoid: true,
        sequelize: db,
        tableName: "contact_pages",
    }

)



