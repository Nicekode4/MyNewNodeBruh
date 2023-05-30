import express from "express";
const app = express();

app.get("/", (req, res) => {
     res.send(418);
});

app.get('/about', (req, res) => {
      res.send('Dette er about siden...');
})

app.get('/contact', (req, res) => {
      res.send('Dette er kontakt siden...');
});

app.listen(4242, () => {
      console.log("Express server kører....");
});

app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet")
})