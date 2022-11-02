import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ms from 'ms';
import rateLimit from 'express-rate-limit';
// This will sanitize any data in req.body, req.query, and req.params
import xss from 'xss-clean';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import { signInUser, signOutUser } from '../middlewares/signInSignOutMiddleware.js';
import { bodySchema } from '../routes-joi-validators/signInValidator.js';
import { createValidator } from 'express-joi-validation';

export const signInSignOutRouter = express.Router();

const validator = createValidator({
    passError: true,
});

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
    max: 345345,
    standardHeaders: true,
    legacyHeaders: false,
});

signInSignOutRouter.use(mongoSanitize());
signInSignOutRouter.use(xss());
signInSignOutRouter.use(helmet());
signInSignOutRouter.use(cookieParser(cookieOptions));
signInSignOutRouter.use(rateLimiterConfig);
signInSignOutRouter.use(cors(corsOptions));
signInSignOutRouter.use(express.json());

signInSignOutRouter.post('/api/sign-in', validator.body(bodySchema), signInUser);
signInSignOutRouter.post('/api/sign-out', signOutUser);

signInSignOutRouter.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        // we had a joi error, let's return a custom 400 json response
        return res.status(400).json({
            type: err.type, // will be "query" here, but could be "headers", "body", or "params"
            message: err.error.toString(),
        });
    }
    // pass on to another error handler
    next(err);
});

signInSignOutRouter.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    // err is http-error err object it consist of many properties, if you passed express will automatically
    // look up the message property and put it in an object an send it as response.
    res.status(err.status).json(err);
});
