const { User } = await import('../models/User.js');
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import createError from 'http-errors';
import ms from 'ms';
import { createClient } from 'redis';

const redisClient = createClient({
    url: 'redis://localhost:6379',
});

await redisClient.connect();

export const signInUser = async (req, res, next) => {
    // if we're in here then the query was valid!. Joi

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(createError(401, 'Email or Password is wrong'));
    }

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
        return next(createError(401, 'Email or Password is wrong'));
    }

    const token = jwt.sign(
        {
            name: user.name,
            username: user.username,
            email: user.email,
        },
        process.env.JWT_SECRET_TOKEN,
        {
            expiresIn: '10m',
        }
    );

    await redisClient.set(`AUTH_TOKEN_${email}`, token);

    res.cookie('AUTH_TOKEN', token, {
        httpOnly: true,
        maxAge: ms('10m'),
    });

    res.status(200).json({
        url: '/homepage',
    });
};

export const signOutUser = async (req, res, next) => {
    if (!req.cookies['AUTH_TOKEN']) {
        return next(createError(401, 'Unauthorized Access'));
    }

    const token = req.cookies['AUTH_TOKEN'];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

        const value = redisClient.del(`AUTH_TOKEN_${payload.email}`);

        if (!value) {
            return next(createError(401, 'Unauthorized Access'));
        }

        return res.status(200).json({
            url: '/redirection',
            message: 'Logged out',
        });
    } catch (err) {
        return next(createError(401, 'Unauthorized Access'));
    }
};
