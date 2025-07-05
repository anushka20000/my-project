import { DataTypes, Model } from 'sequelize';
import db from '../config/db'

interface ApplicantMembers {
  id: bigint;
  position_id: bigint
  name: string;
  phone: string;
  email: string;
  current_salary: string;
  expected_salary: string;
  subject: string;
  resume: string;
  notice_period: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

class Applicant extends Model<ApplicantMembers>{
  //
}

Applicant.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  position_id: {
    type: DataTypes.BIGINT,
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
  current_salary: {
    type: DataTypes.STRING,
  }, 
  expected_salary: {
    type: DataTypes.STRING,
  }, 
  subject: {
    type: DataTypes.TEXT,
  }, 
  notice_period: {
    type: DataTypes.STRING,
  },
  resume: {
    type: DataTypes.STRING,
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
    tableName: "applicants",
  })

export { Applicant, ApplicantMembers }
