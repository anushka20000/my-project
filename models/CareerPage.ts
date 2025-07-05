import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export interface CareerPageMembers {
    id: bigint;
    heading1: string;
    heading2: string;
    heading3: string;
    name1: string;
    name2: string;
    designation1: string;
    designation2: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
    image1: string;
    image2: string;
    meta_title: string;
    meta_keywords: Text;
    meta_image: string;
    meta_description: Text;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class CareerPage extends Model<CareerPageMembers>{
    //
}

CareerPage.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        heading1: {
            type: DataTypes.STRING,
        },
        heading2: {
            type: DataTypes.STRING,
        },
        heading3: {
            type: DataTypes.STRING,
        },
        name1: {
            type: DataTypes.STRING,
        },
        name2: {
            type: DataTypes.STRING,
        },
        description1: {
            type: DataTypes.TEXT,
        },
        description2: {
            type: DataTypes.TEXT,
        },
        description3: {
            type: DataTypes.TEXT,
        },
        description4: {
            type: DataTypes.TEXT,
        },
        description5: {
            type: DataTypes.TEXT,
        },
        image1: {
            type: DataTypes.STRING,
        },
        image2: {
            type: DataTypes.STRING,
        },
        designation1: {
            type: DataTypes.STRING,
        },
        designation2: {
            type: DataTypes.STRING,
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
        tableName: "carrer_pages",
    }
)



