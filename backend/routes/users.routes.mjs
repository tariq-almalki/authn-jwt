import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ms from 'ms';
import rateLimit from 'express-rate-limit';
// This will sanitize any data in req.body, req.query, and req.params
import xss from 'xss-clean';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import {
    getUsers,
    getUser,
    postUser,
    postUserErrorHandler,
    postUserJoiErrorHandler,
    deleteUser,
    putUser,
} from '../middlewares/users.middlewares.mjs';
// import { body, cookie } from 'express-validator';
import { createValidator } from 'express-joi-validation';
import { bodySchema } from '../routes-joi-validators/post-user-validator.mjs';

const validator = createValidator({
    passError: true,
});

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
    // who can receive this cookie
    domain: 'http://localhost:3000',
    expires: new Date(Date.now() + ms('10m')),
    // clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection
    secure: true,
};

const rateLimiterConfig = rateLimit({
    windowMs: ms('10m'),
    max: 15,
    standardHeaders: true,
    legacyHeaders: false,
});

usersRouter.use(mongoSanitize());
usersRouter.use(xss());
usersRouter.use(helmet());
usersRouter.use(cookieParser(cookieOptions));
usersRouter.use(rateLimiterConfig);
usersRouter.use(cors(corsOptions));
usersRouter.use(express.json());

usersRouter.get('/api/users', getUsers);

// prettier-ignore
usersRouter
    .route('/api/users')
    .get(getUser)
    .post(validator.body(bodySchema),postUser, postUserJoiErrorHandler, postUserErrorHandler)
    .delete(deleteUser)
    .put(putUser);
