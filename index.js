const express = require('express'); 
const users = require('./users'); 

const app = express(); 

app.listen(process.env.PORT || 8081, () => {
    console.log(`Server is running on port`); 
})

app.get('/', (_, res) => {
    res.send('Hello'); 
})

app.get('/users', (_, res) => {
    res.json(users); 
})

app.get(`/users/:userId`, (req, res) => {
    if (req.params.userId === undefined || req.params.userId === null) {
         res.console.error("undefined");
     }
    const selectedUser = users.filter((user) => user.userId === Number(req.params.userId)); 

    res.json(selectedUser); 
})


