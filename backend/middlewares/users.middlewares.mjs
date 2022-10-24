/** @type {import("express").RequestHandler} */
const { User } = await import('../models/User.mjs');
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const getUsers = (req, res) => {};
export const getUser = (req, res) => {};
export const postUser = async (req, res) => {
    // if we're in here then the query was valid!

    res.json({
        url: '/success',
        message: 'payload validated',
    });
};

export const postUserJoiErrorHandler = (err, req, res, next) => {
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

export const postUserErrorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(400).json({
        status: 'error',
        err,
    });
};

export const deleteUser = (req, res) => {};
export const putUser = (req, res) => {};
