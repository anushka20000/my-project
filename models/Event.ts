import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export interface EventMembers {
  id: bigint;
  image: string;
  about_us_id: bigint;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class Event extends Model<EventMembers>{
  //
}

Event.init(
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
    about_us_id: {
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
    tableName: "events",
  }

)


