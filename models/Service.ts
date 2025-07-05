import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export interface ServiceMembers {
    id: bigint;
    heading: string;
    description: string;
    image: string;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class Service extends Model<ServiceMembers>{
    //
}

Service.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },heading: {
            type: DataTypes.STRING,

        },description: {
            type: DataTypes.TEXT,

        }, image: {
            type: DataTypes.STRING,

        }, status: {
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
        tableName: "services",
    }

)



