import express from 'express'
const postRouter = express.Router()

postRouter.post('/brakeup', async (req, res) => {
    try {
        // Create a new record
        const newAbout = await About.create({
          title: req.body.title, // Assuming the title is sent in the request body
          content: req.body.content // Assuming the content is sent in the request body
        });

        console.log(req.body.title);
    
        res.send('Row inserted successfully.');
      } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting row.');
      }
})

postRouter.post('/lel', (req, res) => {
    res.send(`
    <p>Fornavn: ${req.body.firstname}</p>
    <p>Efternavn: ${req.body.lastname}</p>
    <p>Email: ${req.body.email}</p>
    <p>Fødselsdag: ${req.body.birthday}</p>
    <p>Kodeord: ${req.body.password}</p>
    <p>Job titel: ${req.body.jobTitle}</p>
    <p>Addrese: ${req.body.address}</p>
    `);
    console.log(req.body);
})

export { postRouter }