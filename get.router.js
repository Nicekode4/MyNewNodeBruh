import express from 'express'
import {con} from "./connect.js"

const getRouter = express.Router()

getRouter.get('/about', (req, res) => {
    
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM abouts", function (err, result, fields) {
          if (err) throw err;
          res.send(result)
        });
      })
})

getRouter.get('/lel/:id', (req, res) => {
    const id = req.params.id;
    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT * FROM abouts WHERE ID=${id}`, function (err, result, fields) {
          if (err) throw err;
          res.send(result)
        });
      })
})

export { getRouter }