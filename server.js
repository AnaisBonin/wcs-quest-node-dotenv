const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.SERVER_PORT;
const myName = process.env.MY_NAME
const myCity = process.env.MY_CITY
const myLanguage = process.env.MY_LANGUAGE

app.get('/', (req, res) => {
    res.send(`I am ${myName}, wilder in ${myCity}, and I love ${myLanguage}`)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
