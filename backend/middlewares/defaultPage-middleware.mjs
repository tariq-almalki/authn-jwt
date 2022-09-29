/** @type {import("express").RequestHandler} */

export const defaultPage = (req, res) => {
    res.json({
        message: 'default page',
    });
};
