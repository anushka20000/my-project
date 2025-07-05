import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export interface SliderMembers {
    id: bigint;
    home_id: bigint;
    desktop_image: string;
    tab_image: string;
    mobile_image: string;
    desktop_video: string;
    tab_video: string;
    mobile_video: string;
    email: string;
    phone: string;
    address: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class Slider extends Model<SliderMembers>{
    //
}

Slider.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        desktop_image: {
            type: DataTypes.STRING,
        },
        tab_image: {
            type: DataTypes.STRING,

        },
        desktop_video: {
            type: DataTypes.STRING,

        },  tab_video: {
            type: DataTypes.STRING,

        },  mobile_video: {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING,

        },
        phone: {
            type: DataTypes.STRING,

        },
        address: {
            type: DataTypes.STRING,

        },
        mobile_image: {
            type: DataTypes.STRING,

        },home_id: {
            type: DataTypes.BIGINT,

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
        tableName: "sliders",
    }

)


