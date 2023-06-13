import BrakeupModel from "../Models/brakeup.model.js";
import express from "express";

class BrakeupController {
    list = async (req, res) => {
        const result = await BrakeupModel.findAll({
            attributes: ['id', 'you','whoToBeatUp','getDogCat','number', 'createdAt', 'updatedAt'],
            order: ['id'],
            limit: 100
        })
        res.json(result)
    }
    details = async (req, res) => {
        const idss = req.query.id;
        console.log(idss);
        const { id } = req.params || 0
        const result = await BrakeupModel.findOne({
            attributes: ['id', 'you','whoToBeatUp','getDogCat','number', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { id, you,whoToBeatUp,getDogCat,number } = req.body;
        console.log(you);
        if (you && whoToBeatUp && getDogCat && number) {
            const model = await BrakeupModel.create(req.body)
            return res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id, you,whoToBeatUp, getCatDog ,number } = req.body;
        BrakeupModel.update(
            { you: you,  whoToBeatUp: whoToBeatUp, getCatDog: getCatDog, number: number},
            { where: { id: id } }
          )
          if (you || whoToBeatUp || getCatDog || number) {
            console.log(id);
            res.sendStatus(200)
          }
    }

    delete = async (req,res) => {
        const { id } = req.body;
        BrakeupModel.destroy({
            where: {
                id: id
            }
            
        })
        res.sendStatus(200)
    }
}
export default BrakeupController