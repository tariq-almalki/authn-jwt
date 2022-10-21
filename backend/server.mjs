import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

// routes
import { usersRouter } from './routes/users.routes.mjs';

dotenv.config({
    path: './config/.env',
});

// to connect to Database
await import('./db/database.connection.mjs');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(
        morgan('dev', {
            // this option is used for logging requests instead of responses.
            // immediate: true,
        })
    );
}

// "app.use" does partial matching, so '/' will match '/', '/users', ...
// other METHOD() does specific matching, if you use '/' then '/' will match only.
app.use('/', usersRouter);

app.listen(process.env.PORT, () => {
    console.log('server started at PORT 5500'.white.bold);
});
