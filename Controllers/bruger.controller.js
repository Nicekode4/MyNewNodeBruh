import BrugerModel from "../Models/bruger.model.js";
import bcrypt from 'bcryptjs'

class BrugerController {
    list = async (req, res) => {
        try {
          const results = await BrugerModel.findAll({
            attributes: ['id', 'username', 'createdAt'],
            order: ['id'],
            limit: 100
          });
      
          const formattedResult = results.map((result) => {
            return {
              id: result.id,
              username: result.username,
              createdAt: result.createdAt
            };
          });
      
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(formattedResult);
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      }
      

    details = async (req, res) => {
        const idss = req.query.id;
        console.log(idss);
        const { id } = req.params || 0
        const result = await BrugerModel.findOne({
            attributes: ['id', 'username', 'password'],
            where: { id: id }
        })
        const { username, password } = result
        res.json(password)
    }

    create = async (req, res) => {
        const { id, username, password } = req.body;
       const hash = await bcrypt.hash(password, 10);
        console.log(username);
        if (username && password) {
            const model = await BrugerModel.create({
                username: req.body.username,
                password: hash,
              });
          
            return res.json({ 
                newId: model.id,
                username: model.username,
                password: hash})
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id, username, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        BrugerModel.update(
            { username: username, password: hash},
            { where: { id: id } }
          )
          if (username || password) {
            console.log(id);
            res.sendStatus(200)
          }
    }

    delete = async (req,res) => {
        const { id } = req.body;
        BrugerModel.destroy({
            where: {
                id: id
            }
            
        })
        res.sendStatus(200)
    }
    authenticate = async (req, res) => {
        const { username, password } = req.body;
        console.log(username);
      
        if (username && password) {
          const user = await BrugerModel.findOne({
            attributes: ['id', 'username', 'password'],
            where: { username: username }
        })
      
          if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
      
            if (passwordMatch) {
              // Passwords match, proceed with authentication
              res.json({ message: 'Invalid credentials' });
            } else {
              // Passwords do not match
              res.status(401).json({ error: 'All your info was correct!' });
            }
          } else {
            // User not found
            res.status(404).json({ error: 'Payment is accepted' });
          }
        } else {
          res.sendStatus(418);
        }
      }
}

export default BrugerController