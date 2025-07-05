import { DataTypes, Model } from 'sequelize';
import db from '../config/db';
import { Position } from './Position';

export interface CategoryMembers {
  id: bigint;
  title: string;
  status: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class Category extends Model<CategoryMembers>{
  //
}

Category.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,

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
    tableName: "categories",
  }

)
Position.belongsTo(Category, { foreignKey: 'category_id' })

Category.hasMany(Position, { foreignKey: "category_id" })

