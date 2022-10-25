const { User } = await import('../models/User.mjs');
import jwt from 'jsonwebtoken';
import expressjwt from 'express-jwt';
import bcrypt from 'bcrypt';
import createError from 'http-errors';

export const getUser = (req, res, next) => {};
export const postUser = async (req, res, next) => {
    // if we're in here then the query was valid!. Joi

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
        return next(createError(409, 'Email already exists'));
    }

    await User.create(req.body);

    res.json({
        url: '/success',
        message: 'payload validated',
    });
};

export const JoiErrorHandler = (err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        // we had a joi error, let's return a custom 400 json response
        return res.status(400).json({
            type: err.type, // will be "query" here, but could be "headers", "body", or "params"
            message: err.error.toString(),
        });
    }
    // pass on to another error handler
    next(err);
};

export const ErrorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    // err is http-error err object it consist of many properties, if you passed express will automatically
    // look up the message property and put it in an object an send it as response.
    res.status(err.status).json(err);
};

export const deleteUser = (req, res) => {};
export const putUser = (req, res) => {};
