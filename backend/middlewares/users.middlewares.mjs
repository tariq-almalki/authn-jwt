import { mongoose } from '../server.mjs';
/** @type {import("express").RequestHandler} */

export const getUsers = (req, res) => {
    res.json({
        message: 'hello world',
    });
};

export const getUser = (req, res) => {};
export const postUser = (req, res) => {};
export const deleteUser = (req, res) => {};
export const putUser = (req, res) => {};
