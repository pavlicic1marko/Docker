const express = require('express');
const { Client } = require('pg');
const HOST = '0.0.0.0';
const PORT = 80;
const app = express();



app.get('/', (req, res) => {
 
    client = new Client({ host: 'db', user: 'postgres' })
 
    client.connect(err => {
        if (err) {
            console.error('connection error', err.stack)
        } else {
            console.log('connected')
        }
    })
 
    console.log("root url fetched.");
 
    client.query('SELECT * FROM passwords', (error, response) => {
        console.log("Response received");
        res.json(response.rows);
    });
});
 
app.listen(PORT, HOST)
