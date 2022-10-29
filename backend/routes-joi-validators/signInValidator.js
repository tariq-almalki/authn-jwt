import Joi from 'joi';

export const bodySchema = Joi.object({
    email: Joi.string()
        .trim()
        .lowercase()
        .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .required(),
    password: Joi.string()
        .trim()
        .min(8)
        .max(15)
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)
        .required(),
});
