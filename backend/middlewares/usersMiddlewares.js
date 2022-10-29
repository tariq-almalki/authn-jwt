const { User } = await import('../models/User.js');
import bcrypt from 'bcrypt';
import createError from 'http-errors';

export const getUser = async (req, res) => {
    if (!req.cookies['AUTH_TOKEN']) {
        next(createError(401, 'Unauthorized Access'));
    }

    const token = req.cookies['AUTH_TOKEN'];

    try {
        const payload = jwtr.verify(token, process.env.JWT_SECRET_TOKEN);
        const { email } = payload;

        const user = await User.findOne({ email });

        return res.status(200).json({
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password,
        });
    } catch (err) {
        next(createError(401, 'Unauthorized Access'));
    }
};

export const postUser = async (req, res, next) => {
    // if we're in here then the query was valid!. Joi

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
        return next(createError(409, 'User already exists'));
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

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

    res.status(201).json({
        url: '/success',
    });
};

export const deleteUser = (req, res) => {};
export const changeUserPassword = (req, res) => {};
