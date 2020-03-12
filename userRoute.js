const express = require('express');
const router = express.Router();
let usersList = [
  {
    id: 1,
    name: 'thanawat',
    age: 18
  },
  {
    id: 2,
    name: 'suntor',
    age: 25
  },
  {
    id: 3,
    name: 'tle',
    age: 26
  }
]
router.get('/all', function(req, res) {
  res.send(usersList)
})
router.post('/addUser', function(req, res) {
  const newUser = {
    id: newId(),
    name: req.body.name,
    age: req.body.age
  }
  usersList.push(newUser);
  res.send(newUser);
})
router.delete('/deleteUser', function(req, res) {
  usersList = usersList.filter(user => user.id !== Number(req.query.id))
  res.send(String(usersList.length))
})
// router.put('/updateuser', function(req, res) {
//   usersList = usersList.map(user => {
//     if(user.id === req.params.id) {
//       return {
//         id: user.id,
//         name: req.body.name,
//         age: req.body.age
//       }
//     } else {
//       return user
//     }
//   })
// })
function newId() {
  return getMaxId() +1;
}
function getMaxId() {
  let max = 0;
  for(let user of usersList) {
    if(user.id > max) {
      max = user.id;
    }
  }
  return max;
}
module.exports = router;