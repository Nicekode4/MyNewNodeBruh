import express from "express";
import BrugerController from "../Controllers/bruger.controller.js";
const BrugerRouter = express.Router()
const controller = new BrugerController()


BrugerRouter.get('/user', (req, res) => {   
    controller.list(req,res)
  })

  BrugerRouter.post('/user', (req, res) => {   
    controller.create(req,res)
  })
  BrugerRouter.put('/user', (req, res) => {   
    controller.update(req,res)
  })
  BrugerRouter.delete('/user', (req, res) => {   
    controller.delete(req,res)
  })

  export { BrugerRouter }