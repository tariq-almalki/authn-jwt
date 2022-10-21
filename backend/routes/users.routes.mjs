import express from 'express';
import cors from 'cors';
import { getUsers, getUser, postUser, deleteUser, putUser } from '../middlewares/users.middlewares.mjs';
import cookieParser from 'cookie-parser';

// creating router and exporting it
export const usersRouter = express.Router();

const corsOptions = {
    // Configures the Access-Control-Allow-Origin CORS header, meaning what client can receive the response.
    origin: 'http://localhost:3000',
    // Access-Control-Allow-Credentials' header in the response is ''
    // which must be 'true' when the request's credentials mode is 'include'
    credentials: true,
};

const cookieOptions = {
    httpOnly: true,
    domain: 'http://localhost:5500',
};

usersRouter.use(cookieParser(cookieOptions));
usersRouter.use(cors(corsOptions));
usersRouter.use(express.json());

usersRouter.get('/api/users', getUsers);

// prettier-ignore
usersRouter.route('/api/users/:id')
    .get(getUser)
    .post(postUser)
    .delete(deleteUser)
    .put(putUser);
