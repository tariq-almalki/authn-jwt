import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ms from 'ms';
import rateLimit from 'express-rate-limit';
// This will sanitize any data in req.body, req.query, and req.params
import xss from 'xss-clean';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import { signInUser } from '../middlewares/sign-in.middleware.mjs';

const signInRouter = express.Router();

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
    max: 154534545,
    standardHeaders: true,
    legacyHeaders: false,
});

signInRouter.use(mongoSanitize());
signInRouter.use(xss());
signInRouter.use(helmet());
signInRouter.use(cookieParser(cookieOptions));
signInRouter.use(rateLimiterConfig);
signInRouter.use(cors(corsOptions));
signInRouter.use(express.json());

signInRouter.get('/api/sign-in', signInUser);
