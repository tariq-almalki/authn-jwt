/** @type {import("express").RequestHandler} */

export const getUsers = (req, res) => {
    res.json({
        message: 'hello world',
    });
};
