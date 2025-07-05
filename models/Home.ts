import { DataTypes, Model } from 'sequelize';
import db from '../config/db';
import { Slider } from './Slider'
import {text} from "aws-sdk/clients/customerprofiles";
export interface HomeMembers {
  id: bigint;
  section_one_heading: string;
  section_one_description: string;
  section_two_description: string;
  section_two_image: string;
  section_two_heading: string
  section_three_heading: string;
  section_four_sub_heading_one: string;
  section_four_sub_heading_two: string;
  section_four_sub_heading_three: string;
  section_four_count_one: string;
  section_four_count_two: string;
  section_four_count_three: string;
  section_four_heading: string
  section_five_heading: string;
  meta_title: string;
  meta_keywords: text;
  meta_image: string;
  meta_description: text;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class Home extends Model<HomeMembers>{
  //
}

Home.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    section_one_description: {
      type: DataTypes.TEXT,

    },
    section_one_heading: {
      type: DataTypes.STRING,

    },
    section_five_heading: {
      type: DataTypes.STRING,

    }, section_four_count_one: {
      type: DataTypes.STRING,

    }, section_four_count_two: {
      type: DataTypes.STRING,

    }, section_four_count_three: {
      type: DataTypes.STRING,

    }, section_four_heading: {
      type: DataTypes.STRING,

    }, section_four_sub_heading_one: {
      type: DataTypes.STRING,

    }, section_four_sub_heading_three: {
      type: DataTypes.STRING,

    }, section_four_sub_heading_two: {
      type: DataTypes.STRING,

    }, section_three_heading: {
      type: DataTypes.STRING,

    }, section_two_description: {
      type: DataTypes.TEXT,

    }, section_two_heading: {
      type: DataTypes.STRING,

    }, section_two_image: {
      type: DataTypes.STRING,

    },
    meta_title: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    meta_image: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    meta_description: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    meta_keywords: {
      type: DataTypes.TEXT,
      defaultValue: null
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
    tableName: "homes",
  }

)
Slider.belongsTo(Home, { foreignKey: 'home_id' })

Home.hasMany(Slider, { foreignKey: "home_id" })

