import express from 'express'; //  ES6 module import syntax
import bodyParser from 'body-parser';
import { apiRoutes } from './routes'; //  destructuring syntax

const app = express();
app.use(bodyParser.json());

app.use('/api/items', apiRoutes);

app.listen(3000);
