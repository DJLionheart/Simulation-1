const express = require('../node_modules/express');
const bodyParser = require('../node_modules/express');
const massive = require('../node_modules/massive');
const ctrl = require('./controllers')
require('../node_modules/dotenv').config();

const serverUrl = '/api/inventory'


const app = express();
app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance));



app.get(serverUrl, ctrl.getInventory)









const port = process.env.PORT || 4025;
app.listen(port, () => { console.log(`Ye olde server doth lend an ear at port ${port}.`); } );