import { DataTypes, Model } from 'sequelize';
import db from '../config/db';
import { Certificate } from './Certificate';
import { Event } from './Event';
import {text} from "aws-sdk/clients/customerprofiles";

export interface AboutUsMembers {
    id: bigint;
    section_one_description: string;
    section_one_description_two: string;
    director_message: string;
    section_one_image: string;
    section_one_heading: string
    section_two_description: string;
    section_two_image: string;
    section_two_heading: string;
    career_description: string;
    team_harbauer_image: string;
    achievement_image: string;
    achievement_heading: string;
    achievement_description: string;
    meta_title: string;
    meta_keywords: text;
    meta_image: string;
    meta_description: text;
    what_happening_image_one: string;
    what_happening_image_two: string;
    what_happening_image_three: string;
    what_happening_date_one: string;
    what_happening_date_two: string;
    what_happening_date_three: string;
    what_happening_place_one: string;
    what_happening_place_two: string;
    what_happening_place_three: string;
    what_happening_heading_one: string;
    what_happening_heading_two: string;
    what_happening_heading_three: string;
    director_name: string;
    career_image1: string;
    career_image2: string;
    career_image3: string;
    career_image4: string;
    certificate: string;
    certificate_description_one: string;
    certificate_description_two: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class AboutUs extends Model<AboutUsMembers>{
    //
}

AboutUs.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        section_one_description: {
            type: DataTypes.TEXT,

        },
        section_one_description_two: {
            type: DataTypes.TEXT,
      
          },
        director_message: {
            type: DataTypes.TEXT,

        },
        section_one_heading: {
            type: DataTypes.STRING,

        }, section_one_image: {
            type: DataTypes.STRING,

        }, section_two_description: {
            type: DataTypes.TEXT,

        }, section_two_heading: {
            type: DataTypes.STRING,

        }, section_two_image: {
            type: DataTypes.STRING,

        }, what_happening_date_one: {
            type: DataTypes.STRING,

        },
        what_happening_date_two: {
            type: DataTypes.STRING,

        },what_happening_date_three: {
            type: DataTypes.STRING,

        },what_happening_heading_one: {
            type: DataTypes.STRING,

        },what_happening_heading_two: {
            type: DataTypes.STRING,

        },what_happening_heading_three: {
            type: DataTypes.STRING,

        },what_happening_image_one: {
            type: DataTypes.STRING,

        },what_happening_image_two: {
            type: DataTypes.STRING,

        },what_happening_image_three: {
            type: DataTypes.STRING,

        },what_happening_place_one: {
            type: DataTypes.STRING,

        },what_happening_place_two: {
            type: DataTypes.STRING,

        },what_happening_place_three: {
            type: DataTypes.STRING,

        },director_name: {
            type: DataTypes.STRING,

        },career_image1: {
            type: DataTypes.STRING,

        },career_image2: {
            type: DataTypes.STRING,

        },career_image3: {
            type: DataTypes.STRING,

        },career_image4: {
            type: DataTypes.STRING,

        },certificate: {
            type: DataTypes.STRING,

        },certificate_description_one: {
            type: DataTypes.TEXT,

        },certificate_description_two: {
            type: DataTypes.TEXT,

        },
        career_description: {
            type: DataTypes.TEXT,

        },
        achievement_description: {
            type: DataTypes.TEXT,

        },
        achievement_heading: {
            type: DataTypes.STRING,

        },
        achievement_image: {
            type: DataTypes.STRING,

        },
        team_harbauer_image: {
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
        tableName: "about_us",
    }

)

Certificate.belongsTo(AboutUs, { foreignKey: 'about_us_id' })
Event.belongsTo(AboutUs, { foreignKey: 'about_us_id' })

AboutUs.hasMany(Event, { foreignKey: "about_us_id" })
AboutUs.hasMany(Certificate, { foreignKey: "about_us_id" })

