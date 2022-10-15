import express from 'express';
import cors from 'cors';
import { getUsers, getUser, postUser, deleteUser, putUser } from '../middlewares/users.middlewares.mjs';
import { defaultPage } from '../middlewares/homepage.middlewares.mjs';

// creating router and exporting it
export const usersRouter = express.Router();

const corsOptions = {
    origin: 'http://localhost:3000',
};

usersRouter.use(cors(corsOptions));
usersRouter.use(express.json());

usersRouter.get('/', defaultPage);
usersRouter.get('/api/users', getUsers);

// prettier-ignore
usersRouter.route('/api/users/:id')
    .get(getUser)
    .post(postUser)
    .delete(deleteUser)
    .put(putUser);
