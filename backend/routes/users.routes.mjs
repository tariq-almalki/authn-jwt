import express from 'express';
import { getUsers, getUser, postUser, deleteUser, putUser } from '../middlewares/users.middlewares.mjs';
import { defaultPage } from '../middlewares/homepage.middlewares.mjs';

// creating router and exporting it
export const usersRouter = express.Router();

usersRouter.get('/', defaultPage);

usersRouter.route('/api/users').get(getUsers);

// prettier-ignore
usersRouter.route('/api/users/:id')
    .get(getUser)
    .post(postUser)
    .delete(deleteUser)
    .put(putUser);
