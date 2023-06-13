import { sequelize } from "../config/sequelize.config.js";
import { DataTypes, Model  } from "sequelize";

class BrakeupModel extends Model{}

BrakeupModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    you: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    whoToBeatUp: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    getCatDog: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    number: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },    
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'abouts',
    freezeTableName: true
})

export default BrakeupModel