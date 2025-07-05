import { DataTypes, Model } from 'sequelize';
import db from '../config/db';
import { Position } from './Position';

export interface ProcessSliderMembers {
  id: bigint;
  image: string;
  description: string;
  name: string;
  status: number;
  type: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class ProcessSlider extends Model<ProcessSliderMembers>{
  //
}

ProcessSlider.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,

    },
    description: {
      type: DataTypes.STRING,

    },
    name: {
      type: DataTypes.STRING,

    },
    type: {
      type: DataTypes.TINYINT,
      comment: '1,2,3'

    },
    status: {
      type: DataTypes.TINYINT,
      comment: '0 -> Inactive, 1 -> Active'
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
    tableName: "process_sliders",
  }

)


