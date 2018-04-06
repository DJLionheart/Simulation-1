const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controllers')
require('dotenv').config();



const app = express();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db));


app.post('/api/product', ctrl.addProduct)

app.get('/api/inventory', ctrl.getInventory)









const port = 4025;
app.listen(port, () => { console.log(`Ye olde server doth lend an ear at port ${port}. ${app.db}`); } );