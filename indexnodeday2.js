fetch('homework1.json').then(response => {
    return response.json();
 })
 .then(myJson => {
    console.log(myJson);
 })
 .catch(error => {
    console.error('Error:', error);
 });

const fs = require('fs')

fetch('homework1.json').then((response) => {
    console.log(response)
})

function fetch(path) {
    return new Promise((resolve, reject)=> {
        const fs = require('fs')
        const response = fs.readFileSync(path, 'utf-8')
        resolve(response)
    })
}

fetch('homework1.json').then(function(response) {
    return (response)
})


function fetch(path) {
    return new Promise(function(resolve,reject) {
        const fs = require('fs')
        const response = 
    }
}

.then(myJson =>{
    console.log(myJson);
})
.catch(error =>{
    console.log('Error:', error)
})


