require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Ddos  = require ( 'ddos' ) 
const { logRequest, logError } = require('./config/config-logs');

//Initialize our app variable
const app = express();

//Middleware for logger
app.use(logRequest)
app.use(logError)

//Middleware for ddos
const ddos = new Ddos({burst:10, limit:15})
app.use(ddos.express);

//Middleware for CORS
app.use(cors());

//Middlewares for bodyparsing using both json and urlencoding
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

/* not get request */
app.get('/', (req, res) => {

    res.send("Invalid page");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Escuchando el el puerto ${port}`);
});
   
