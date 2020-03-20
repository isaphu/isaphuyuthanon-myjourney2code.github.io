const express = require('express');
const bodyParser = require('body-parser');
const { Op } = require('express')
const db = require('./models');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/student', function (req, res) {
    let newStudent = {
        name: req.body.name,
        year: Number(req.body.year)
    }
    db.student.create(newStudent)
        .then(result => res.status(200).send(result))
        .catch((err) => res.status(400).send(err))
})

app.get('/get-all-student', async function (req, res) {
    const student = await db.student.findAll({ where: { point: { [Op.lt]: 16 } } });
    res.send(student);
})

app.delete('/delete-student/:id', async function (req, res) {
    await db.student.destroy({ where: { id: Number(req.params.id) } });
    res.status(204).send();
})

app.put('/update-studen', async function (req, res) {
    await db.student.update({ name: 'Nat' }, { where: { id: 2 } });
    res.send();
})

app.delete('/change-name/:from/:to', async function (req, res) {
    const targetStudent = await db.student.findOne({ where: { name: req.params.from } })
    targetStudent.update({ name: req.params.to })
    res.send(targetStudent);
})

app.post('/add-stuent-with-teacher', async function (req, res) {
    db.student.create({
        name: "Bass",
        year: 2000,
        teacher: {
            name: "Tuk",
            age: 29
        }
    }, {
        include: [db.teacher]
    })
})
db.sequelize.sync().then(() => {

    app.listen(8000, () => {
        console.log('Server is running on port 8000')
    });
})




