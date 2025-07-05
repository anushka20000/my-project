import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export interface instance {
  id: bigint;
  first_name: string;
  last_name: string;
  password: string;
  phone: string;
  email: string;
  otp: string;
  type: number;
  status: number;
  is_verified: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class User extends Model<instance>{
 //
}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    otp: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    },
    status: {
      type: DataTypes.TINYINT,
    },
    is_verified: {
      type: DataTypes.TINYINT,
      defaultValue: null
    }
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: db,
    tableName: "users",
  }

)






