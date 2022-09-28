import express from 'express';
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config({
    path: '../config/.env',
});

const app = express();

app.listen(process.env.PORT, () => {
    console.log('server started at PORT 5500');
});
