const express = require('express')
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const config = require('./config/config');
const db = require('./database/database');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/', require('./router/index'));

http.listen(config.port, () => {
    console.log('server is running on port ', config.port)
});
