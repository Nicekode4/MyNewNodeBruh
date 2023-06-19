import BrugerModel from "../Models/bruger.model.js";

class BrugerController {
    list = async (req, res) => {
        const result = await BrugerModel.findAll({
            attributes: ['id', 'username', 'createdAt'],
            order: ['id'],
            limit: 100
        })
        res.json(result)
    }
    create = async (req, res) => {
        const { id, username, password } = req.body;
        console.log(username);
        if (username && password) {
            const model = await BrugerModel.create(req.body)
            return res.json({ 
                newId: model.id,
                username: model.username })
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id, username, password } = req.body;
        BrakeupModel.update(
            { username: username, password: password},
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

}

export default BrugerController