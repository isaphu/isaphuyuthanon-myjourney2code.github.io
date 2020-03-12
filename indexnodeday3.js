// const express = require('express'); //import express module
// const app = express(); //create express app

// const catRoute = require('./routes/catRoute');
// const dogRoute = require('./routes/dogRoute');
// const userRoute = require('./routes/userRoute');
// const bodyParser = require('body-parser');

// app.use('/cat', catRoute);
// app.use('/dog', dogRoute);
// app.use('/user', userRoute);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended:false }))


// // app.get('/add', function (req, res) {
// //     let firstNumber = Number(req.query.a);
// //     let secondNumber = Number(req.query.b);
// //     let answer;
// //     switch (req.query.mode) {
// //         case "add":
// //         answer = firstNumber + secondNumber;
// //           break;
// //         case "subtract":
// //         answer = firstNumber - secondNumber;
// //           break;
// //         case "multiply":
// //         answer = firstNumber * secondNumber;
// //           break;
// //         case "divide":
// //         answer = firstNumber / secondNumber;
// //           break;
// //         default:
// //         answer = firstNumber + secondNumber;
// // }
// //     res.status(200).send(`the answer is ${answer}`);
//     // console.log(req.query);
//     // res.send(req.query);
// })





// // create get method in path '/' 
// // app.get('/dog/play', function (req, res) {
// //     res.send('dog play');
// // });

// // app.get('/dog/walk', function (req, res) {
// //     res.send('dog walk');
// // });


// // app.get('/cat/eat', function(req,res){
// //     res.send('cat eat');
// // });

// // app.get('/cat/sleep', function(req,res){
// //     res.send('cat sleep')
// // })

// // const students = [
// //     { name: 'sonter', age: 19 },
// //     { name: 'nat', age: 30 },
// //     { name: 'tle', age: 14 },
// //   ]
  
// // app.get('/stduent/:id', function (req, res) {
// //     if (req.params.id === 0) {
// //       res.send(students[0])
// //     } else if (req.params.id === 1) {
// //       res.send(students[1])
// //     } else if (req.params.id === 2) {
// //       res.send(students[2])
// //     } else {
// //       res.status(404).send({ message: 'User not found' })
// //     }
// //   })

// // app.get('/add/:a/:mode/:b:/mode', function (req, res) {
// //     let firstNumber = req.params.a;
// //     let secondNumber = req.params.b;
// //     let answer;
// //     switch (req.params.mode) {
// //         case "add":
// //         answer = firstNumber + secondNumber;
// //           break;
// //         case "subtract":
// //         answer = firstNumber - secondNumber;
// //           break;
// //         case "multiply":
// //         answer = firstNumber * secondNumber;
// //           break;
// //         case "divide":
// //         answer = firstNumber / secondNumber;
// //           break;
// //         default:
// //         answer = firstNumber + secondNumber;
// // }
// //     res.status(200).send(`the answer is ${answer}`);
// // })

// // app.post('/add', function (req, res) {
// //     let firstNumber = req.body.a;
// //     let secondNumber = req.body.b;
// //     let answer;
// //     switch (req.body.mode) {
// //         case "add":
// //         answer = firstNumber + secondNumber;
// //           break;
// //         case "subtract":
// //         answer = firstNumber - secondNumber;
// //           break;
// //         case "multiply":
// //         answer = firstNumber * secondNumber;
// //           break;
// //         case "divide":
// //         answer = firstNumber / secondNumber;
// //           break;
// //         default:
// //         answer = firstNumber + secondNumber;
// // }
// //     res.status(200).send(`the answer is ${answer}`);
// // })



// // to set the listen on port 8000
// app.listen(8000, function () {
//     console.log('Server is running on port 8000');
// });

