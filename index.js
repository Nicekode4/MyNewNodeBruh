import express from "express";
import dotenv from 'dotenv'
import { Sequelize,DataTypes } from "sequelize";
dotenv.config();

const app = express();
const port = process.env.PORT;
const img = process.env.IMG
const font = process.env.FONT
app.use(express.urlencoded({ extended: true }));
import { BrakeupRouter } from "./Routers/brakeup.router.js";

// Sync the model with the database
app.get("/", (req, res) => {
     res.send(451);
});

app.use(BrakeupRouter)

//app.use(postRouter)
app.listen(port, () => {
  console.log(`Webserver running on http://localhost:${port}`);
})
app.use((req, res, next) => {
    res.status(404).send(`
    <img src="${img}" alt="Bllede"/>
    <h1 style="font-family: ${font}">Ahh shit! We can't find this bruh</h1>
    `)
})