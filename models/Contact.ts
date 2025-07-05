import { DataTypes, Model } from 'sequelize';
import db from '../config/db'

interface ContactMembers {
    id: bigint;
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class Contact extends Model<ContactMembers>{
    //
}

Contact.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    subject: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.TINYINT,
        defaultValue: 0
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
        tableName: "contacts",
    })

export { Contact, ContactMembers }
