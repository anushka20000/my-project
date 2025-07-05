import { DataTypes, Model } from 'sequelize';
import db from '../config/db';
import { Applicant } from './Applicant';

export interface PositionMembers {
  id: bigint;
  category_id: bigint;
  title: string;
  description: string;
  type: number;
  address: string;
  status: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class Position extends Model<PositionMembers>{
  //
}

Position.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,

    },
    description: {
      type: DataTypes.TEXT,

    },
    type: {
      type: DataTypes.TINYINT,

    },
    address: {
      type: DataTypes.STRING,

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
    tableName: "positions",
  }

)
Applicant.belongsTo(Position, { foreignKey: 'position_id' })

Position.hasMany(Applicant, { foreignKey: "position_id" })
