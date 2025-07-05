import { DataTypes, Model } from 'sequelize';
import db from '../config/db';
import { Certificate } from './Certificate';
import { Event } from './Event';
import {text} from "aws-sdk/clients/customerprofiles";

export interface ProcessMembers {
    id: bigint;
    section_one_description: string;
    section_one_heading: string;
    section_two_description: string;
    section_two_heading: string;
    section_three_heading: string;
    section_three_description: string;
    section_one_image_one: string;
    section_one_image_two: string;
    section_one_image_three: string;
    section_one_image_four: string;
    section_two_image_one: string;
    section_two_image_two: string;
    section_two_image_three: string;
    section_two_image_four: string;
    section_three_image_one: string;
    section_three_image_two: string;
    section_three_image_three: string;
    process_one_image: string;
    process_one_heading_one: string;
    process_one_heading_two: string;
    process_one_heading_three: string;
    process_one_heading_four: string;
    process_one_heading_five: string;
    process_one_description:string;
    process_two_image: string;
    process_two_heading_one: string;
    process_two_heading_two: string;
    process_two_heading_three: string;
    process_two_heading_four: string;
    process_two_description:string;
    process_three_image: string;
    process_three_heading_one: string;
    process_three_heading_two: string;
    process_three_heading_three: string;
    process_three_heading_four: string;
    process_three_heading_five: string;
    process_three_description:string;
    meta_title: string;
    meta_keywords: text;
    meta_image: string;
    meta_description: text;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class Process extends Model<ProcessMembers>{
    //
}

Process.init(
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

        }, section_two_description: {
            type: DataTypes.TEXT,

        }, section_two_heading: {
            type: DataTypes.STRING,

        }, section_three_description: {
            type: DataTypes.TEXT,

        }, section_three_heading: {
            type: DataTypes.STRING,

        },
        section_one_image_one: {
            type: DataTypes.STRING,

        },section_one_image_two: {
            type: DataTypes.STRING,

        },section_one_image_three: {
            type: DataTypes.STRING,

        },section_one_image_four: {
            type: DataTypes.STRING,

        },section_two_image_one: {
            type: DataTypes.STRING,

        },section_two_image_two: {
            type: DataTypes.STRING,

        },section_two_image_three: {
            type: DataTypes.STRING,

        },section_three_image_one: {
            type: DataTypes.STRING,

        },section_three_image_three: {
            type: DataTypes.STRING,

        },section_three_image_two: {
            type: DataTypes.STRING,

        },section_two_image_four: {
            type: DataTypes.STRING,

        }, process_one_image: {
            type: DataTypes.STRING,
      
          },    process_two_image: {
            type: DataTypes.STRING,
      
          },    process_three_image: {
            type: DataTypes.STRING,
      
          },    process_one_heading_one: {
            type: DataTypes.STRING,
      
          },    process_one_heading_two: {
            type: DataTypes.STRING,
      
          },    process_one_heading_three: {
            type: DataTypes.STRING,
      
          },    process_one_heading_four: {
            type: DataTypes.STRING,
      
          },    process_one_heading_five: {
            type: DataTypes.STRING,
      
          },    process_two_heading_one: {
            type: DataTypes.STRING,
      
          },    process_two_heading_two: {
            type: DataTypes.STRING,
      
          },    process_two_heading_three: {
            type: DataTypes.STRING,
      
          },    process_two_heading_four: {
            type: DataTypes.STRING,
      
          },    process_three_heading_one: {
            type: DataTypes.STRING,
      
          },    process_three_heading_two: {
            type: DataTypes.STRING,
      
          },    process_three_heading_three: {
            type: DataTypes.STRING,
      
          },    process_three_heading_four: {
            type: DataTypes.STRING,
      
          },    process_three_heading_five: {
            type: DataTypes.STRING,
      
          },    process_one_description: {
            type: DataTypes.TEXT,
      
          },    process_two_description: {
            type: DataTypes.TEXT,
      
          },    process_three_description: {
            type: DataTypes.TEXT,
      
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
        tableName: "processes",
    }

)



