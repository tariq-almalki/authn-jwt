import express from 'express';
import * as dotenv from 'dotenv';
import { usersRouter } from './routes/users.routes.mjs';
import colors from 'colors';
// to connect to Database
const { connect } = await import('./config/database.connection.mjs');

export const mongoose = await connect();

dotenv.config({
    path: './config/.env',
});

const app = express();

// "use" does partial matching, so '/' will match '/', '/users', ...
// other METHOD() does specific matching, if you use '/' then '/' will match only.

app.use('/', usersRouter);

app.listen(process.env.PORT, () => {
    console.log('server started at PORT 5500'.yellow.bold);
});
