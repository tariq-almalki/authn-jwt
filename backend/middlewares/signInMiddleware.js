const { User } = await import('../models/User.js');
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import createError from 'http-errors';
import ms from 'ms';

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
            expiresIn: '5s',
        }
    );

    res.cookie('AUTH_TOKEN', token, {
        httpOnly: true,
        maxAge: ms('10m'),
    });

    res.status(200).json({
        url: '/homepage',
    });
};
