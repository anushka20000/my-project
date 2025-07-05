import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export interface ProjectHighlightMembers {
    id: bigint;
    // heading: string;
    // sub_heading: string;
    year: string;
    address: string;
    image: string;
    description: string;
    solution_id: bigint;
    status: number;
    key1: string;
    key2: string;
    key3: string;
    key4: string;
    key5: string;
    key6: string;
    key7: string;
    key8: string;
    key9: string;
    key10: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    value6: string;
    value7: string;
    value8: string;
    value9: string;
    value10: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class ProjectHighlight extends Model<ProjectHighlightMembers>{
    //
}

ProjectHighlight.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        // heading: {
        //     type: DataTypes.STRING,

        // },
        year: {
            type: DataTypes.STRING,

        }, image: {
            type: DataTypes.STRING,

        }, address: {
            type: DataTypes.STRING,

        },
        //  sub_heading: {
        //     type: DataTypes.STRING,

        // },
        solution_id: {
            type: DataTypes.BIGINT,
        },
        description: {
            type: DataTypes.TEXT,

        },
        key1: {
            type: DataTypes.TEXT,

        },
        key2: {
            type: DataTypes.TEXT,

        },
        key3: {
            type: DataTypes.TEXT,

        },
        key4: {
            type: DataTypes.TEXT,

        },
        key5: {
            type: DataTypes.TEXT,

        },
        key6: {
            type: DataTypes.TEXT,

        },
        key7: {
            type: DataTypes.TEXT,

        },
        key8: {
            type: DataTypes.TEXT,

        },
        key9: {
            type: DataTypes.TEXT,

        },
        key10: {
            type: DataTypes.TEXT,

        },
        value1: {
            type: DataTypes.TEXT,

        },
        value2: {
            type: DataTypes.TEXT,

        },
        value3: {
            type: DataTypes.TEXT,

        },
        value4: {
            type: DataTypes.TEXT,

        },
        value5: {
            type: DataTypes.TEXT,

        },
        value6: {
            type: DataTypes.TEXT,

        },
        value7: {
            type: DataTypes.TEXT,

        },
        value8: {
            type: DataTypes.TEXT,

        },
        value9: {
            type: DataTypes.TEXT,

        },
        value10: {
            type: DataTypes.TEXT,

        },
        status: {
            type: DataTypes.TINYINT,
            comment: '0-> Inactive, 1-> Active'
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
        tableName: "project_highlights",
    }

)


