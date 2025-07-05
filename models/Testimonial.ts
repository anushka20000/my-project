import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export interface TestimonialMembers {
  id: bigint;
  name: string;
  designation: string;
  comment: string;
  image: string;
  status: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class Testimonial extends Model<TestimonialMembers>{
  //
}

Testimonial.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,

    },
    designation: {
      type: DataTypes.STRING,

    },
    comment: {
      type: DataTypes.TEXT,

    },
    image: {
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
    tableName: "testimonials",
  }

)
