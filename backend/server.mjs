import express from 'express';
import * as dotenv from 'dotenv';
import { usersRouter } from './routes/users.routes.mjs';
import colors from 'colors';
// to connect to Database
import { mongoose_3 as mongoose } from './db/database.connection.mjs';

dotenv.config({
    path: './config/.env',
});

const app = express();

app.use(express.urlencoded({ urlencoded: true }));

// "use" does partial matching, so '/' will match '/', '/users', ...
// other METHOD() does specific matching, if you use '/' then '/' will match only.

app.use('/', usersRouter);

app.listen(process.env.PORT, () => {
    console.log('server started at PORT 5500'.yellow.bold);
});
