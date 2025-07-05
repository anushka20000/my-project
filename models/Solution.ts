import { DataTypes, Model } from 'sequelize';
import db from '../config/db';
import { ProjectHighlight } from './ProjectHighlight';

export interface SolutionMembers {
    id: bigint;
    section_one_image: string;
    section_one_heading: string;
    section_two_description: string;
    section_two_description_one: string;
    section_two_sub_heading: string;
    section_two_heading: string;
    section_three_heading: string;
    section_three_description: string;
    image_one: string;
    image_two: string;
    image_three: string;
    image_four: string;
    meta_title: string;
    meta_keywords: Text;
    meta_image: string;
    meta_description: Text;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class Solution extends Model<SolutionMembers>{
    //
}

Solution.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }, section_two_sub_heading: {
            type: DataTypes.STRING,

        }, section_one_heading: {
            type: DataTypes.STRING,

        }, section_two_description: {
            type: DataTypes.TEXT,

        }, section_two_description_one: {
            type: DataTypes.TEXT,

        }, section_two_heading: {
            type: DataTypes.STRING,

        }, section_three_description: {
            type: DataTypes.TEXT,

        }, section_three_heading: {
            type: DataTypes.STRING,

        }, section_one_image: {
            type: DataTypes.STRING,

        }, image_one: {
            type: DataTypes.STRING,

        }, image_two: {
            type: DataTypes.STRING,

        }, image_three: {
            type: DataTypes.STRING,

        }, image_four: {
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
        tableName: "solutions",
    }

)
ProjectHighlight.belongsTo(Solution, { foreignKey: 'solution_id' })

Solution.hasMany(ProjectHighlight, { foreignKey: "solution_id" })

