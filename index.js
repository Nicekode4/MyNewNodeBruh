import express from "express";
import dotenv from 'dotenv'
import { Sequelize,DataTypes } from "sequelize";
dotenv.config();

const app = express();
const port = process.env.PORT;
const img = process.env.IMG
const font = process.env.FONT
app.use(express.urlencoded({ extended: true }));
import { postRouter } from "./post.router.js";
import { getRouter } from "./get.router.js";

const sequelize = new Sequelize(process.env.NAVN, process.env.USER, process.env.PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      logging: console.log

    });

const About = sequelize.define('About', {
  you: {
    type: DataTypes.STRING,
    allowNull: true
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true
  },
  whoToBeatUp: {
    type: DataTypes.STRING,
    allowNull: true
  },
  getDogCat: {
    type: DataTypes.STRING,
    allowNull: true
  },
  number: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

// Sync the model with the database
About.sync();

app.post('/about', async (req, res) => {
      try {
          // Create a new record
          const newAbout = await About.create({
            you: req.body.you,
            reason: req.body.reason,
            whoToBeatUp: req.body.whoToBeatUp,
            getDogCat: req.body.getDogCat,
            number: req.body.number
          });
  
          console.log(req.body.title);
      
          res.send('Row inserted successfully.');
        } catch (error) {
          console.error(error);
          res.status(500).send('Error inserting row.');
        }
  })
app.get("/", (req, res) => {
     res.send(451);
});

app.use('/', getRouter)

app.use('/', postRouter)

app.put('/about', (req, res) => {
      res.send('Opdater...');
})

app.delete('/about', (req, res) => {
      res.send('Slet...');
})

app.get('/about/lel', (req, res) => {
      res.send('Dette er about siden lel...');
})

app.get('/contact', (req, res) => {
      res.send('Dette er kontakt siden...');
});

app.listen(4242, () => {
      console.log(`Express server kører.... på http://localhost:${port}/`);
});

app.use((req, res, next) => {
    res.status(404).send(`
    <img src="${img}" alt="Bllede"/>
    <h1 style="font-family: ${font}">Ahh shit! We can't find this bruh</h1>
    `)
})