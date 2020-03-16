const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/student', function(req,res){
    let newStudent = {
        name: req.body.name,
        year: Number(req.body.year)
    }
    db.student.create(newStudent)
    .then(result => res.status(200).send(result))
    .catch((err) => res.status(400).send(err))
})

db.sequelize.sync().then(()=>{

app.listen(8000, () => {
    console.log('Server is running on port 8000')
    });
})




