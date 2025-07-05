import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export interface ClientMembers {
    id: bigint;
    client_name: bigint;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class Client extends Model<ClientMembers>{
    //
}

Client.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        client_name: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
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
        tableName: "clients",
    }

)


