import express from 'express'
import BrakeupController from '../Controllers/brakeup.controller.js'
const BrakeupRouter = express.Router()
const controller = new BrakeupController()

BrakeupRouter.get('/brakeup', (req, res) => {   
  controller.list(req,res)
})

BrakeupRouter.get('/brakeup/:id', (req, res) => {
  controller.details(req,res)
})

BrakeupRouter.post('/brakeup', (req, res) => {   
  controller.create(req,res)
})

BrakeupRouter.put('/brakeup', (req, res) => {   
  controller.update(req,res)
})

BrakeupRouter.delete('/brakeup', (req, res) => {   
  controller.delete(req,res)
})
export { BrakeupRouter }