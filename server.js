const express = require('express');
const pg = require('pg');
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');

const app = express();
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
app.use(cors());

app.get('/api/v1/books', (req, res) => {
    client.query(`
        SELECT * FROM books;
    `).then(result => res.send(result.rows))
    .catch(err => console.error(err));
});

app.listen(PORT, () => console.log('Listening on PORT', PORT));