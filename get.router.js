import express from 'express'

const getRouter = express.Router()

getRouter.get('/about', (req, res) => {
    res.send('Få...');
})

getRouter.get('/lel', (req, res) => {
    res.send('');
})

export { getRouter }