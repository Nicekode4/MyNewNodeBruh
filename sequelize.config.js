import { Sequelize,DataTypes } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.NAVN,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: "localhost",
        dialect: 'mysql'
    }
)

export { sequelize,DataTypes }