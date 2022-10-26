const { User } = await import('../models/User.mjs');
import jwt from 'jsonwebtoken';
import expressjwt from 'express-jwt';
import bcrypt from 'bcrypt';
import ms from 'ms';
import createError from 'http-errors';

export const postUser = async (req, res, next) => {
    // if we're in here then the query was valid!. Joi

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
        return next(createError(409, 'User already exists'));
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const token = await jwt.sign(
        {
            _id: req.body._id,
            name: req.body.name,
            username: req.body.name,
            email: req.body.email,
        },
        process.env.JWT_SECRET_TOKEN,
        {
            expiresIn: ms(ms('10m')),
        }
    );

    try {
        await User.create({
            _id: req.body._id,
            name: req.body.name,
            username: req.body.name,
            email: req.body.email,
            password: hashPassword,
        });
    } catch (err) {
        next(err);
    }

    res.cookie('AUTH_TOKEN', token, {
        httpOnly: true,
        maxAge: ms('10m'),
    });

    res.json({
        url: '/success',
        message: 'payload validated',
    });
};

export const deleteUser = (req, res) => {};
export const changeUserPassword = (req, res) => {};