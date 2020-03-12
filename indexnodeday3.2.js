const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userRoute)

app.listen(8000, function() {
  console.log('Server is running on port 8000');
})