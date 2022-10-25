import Joi from 'joi';

export const bodySchema = Joi.object({
    //  prettier-ignore
    _id: Joi.string()
        .trim()
        .required(),
    name: Joi.string()
        .trim()
        .min(3)
        .max(15)
        .regex(/^[a-zA-Z]{3,}[ ]?([a-zA-Z]+)?$/)
        .required(),
    username: Joi.string()
        .trim()
        .min(6)
        .max(12)
        .regex(/^[a-zA-Z][a-zA-Z0-9-_\.]{5,12}$/)
        .required(),
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
    cpassword: Joi.string()
        .trim()
        .min(8)
        .max(15)
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)
        // how to check for password confirmation
        // https://stackoverflow.com/questions/29827082/hapi-route-joi-validation-of-password-confirmation
        .valid(Joi.ref('password'))
        .required(),
});
