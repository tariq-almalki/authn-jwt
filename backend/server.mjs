import express from 'express';
import * as dotenv from 'dotenv';
import { usersRouter } from './routes/users-route.mjs';

dotenv.config({
    path: './config/.env',
});

const app = express();

// use does partial matching, so this will match "/users"
// other METHOD() does specific matching.
app.use('/', usersRouter);

app.listen(process.env.PORT, () => {
    console.log('server started at PORT 5500');
});
