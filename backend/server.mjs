import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

dotenv.config({
    path: './config/.env',
});

// routes
const { usersRouter } = await import('./routes/users.routes.mjs');

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
