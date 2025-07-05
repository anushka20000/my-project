import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export interface StoryMembers {
    id: bigint;
    section_one_description: string;
    section_one_image: string;
    section_two_description: string;
    section_two_image: string;
    section_two_cover_image: string;
    section_two_heading: string
    section_three_description: string;
    section_three_image: string;
    section_three_cover_image: string;
    section_three_heading: string;
    section_four_description: string;
    section_four_image: string;
    section_four_cover_image: string;
    section_four_heading: string
    section_five_description: string;
    section_five_image: string;
    section_five_heading: string;
    section_six_description: string;
    section_six_image: string;
    meta_title: string;
    meta_keywords: Text;
    meta_image: string;
    meta_description: Text;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class Story extends Model<StoryMembers>{
    //
}

Story.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        section_one_description: {
            type: DataTypes.TEXT,
        },section_one_image: {
            type: DataTypes.STRING,

        },
        section_two_heading: {
            type: DataTypes.STRING,

        }, section_two_description: {
            type: DataTypes.TEXT,

        }, section_two_image: {
            type: DataTypes.STRING,

        }, section_two_cover_image: {
            type: DataTypes.STRING,

        }, section_three_cover_image: {
            type: DataTypes.STRING,

        }, section_four_cover_image: {
            type: DataTypes.STRING,

        }, section_three_heading: {
            type: DataTypes.STRING,

        }, section_three_description: {
            type: DataTypes.TEXT,

        }, section_three_image: {
            type: DataTypes.STRING,

        }, section_four_heading: {
            type: DataTypes.STRING,

        }, section_four_description: {
            type: DataTypes.TEXT,

        }, section_four_image: {
            type: DataTypes.STRING,

        }, section_five_heading: {
            type: DataTypes.STRING,

        }, section_five_description: {
            type: DataTypes.TEXT,

        }, section_five_image: {
            type: DataTypes.STRING,

        }, section_six_description: {
            type: DataTypes.TEXT,

        },section_six_image: {
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
        tableName: "stories",
    }

)


