import express from 'express';
import { getUsers } from '../middlewares/users-middlewares.mjs';
import { defaultPage } from '../middlewares/defaultPage-middleware.mjs';

// creating router and exporting it
export const usersRouter = express.Router();

usersRouter.get('/', defaultPage);

usersRouter.get('/users', getUsers);
