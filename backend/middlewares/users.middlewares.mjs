/** @type {import("express").RequestHandler} */
const { User } = await import('../models/User.mjs');
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const getUsers = (req, res) => {};
export const getUser = (req, res) => {};
export const postUser = (req, res) => {
    const { name, username, email, password, cpassword } = req.body;
};
export const deleteUser = (req, res) => {};
export const putUser = (req, res) => {};
