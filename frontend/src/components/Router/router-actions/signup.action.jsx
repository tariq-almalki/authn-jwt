import { nanoid } from 'nanoid';

// Actions
// first executed on POST, PUT, DELETE, PATCH requests
// doesn't get executed on GET requests
// Actions are called whenever the app sends a non-get submission
// you can use the returned value, using useActionData() hook
export const signUpAction = async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    return fetch(`http://localhost:5500/api/users/${nanoid()}`, {
        method: 'POST',
        mode: 'cors',
        // you need to stringify Javascript Object
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
