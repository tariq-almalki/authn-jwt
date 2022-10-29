import { redirect } from 'react-router-dom';

// Actions
// first executed on POST, PUT, DELETE, PATCH requests
// doesn't get executed on GET requests
// Actions are called whenever the app sends a non-get submission
// you can use the returned value, using useActionData() hook
export const signInAction = async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    const response = await fetch('http://localhost:5500/api/sign-in', {
        method: 'POST',
        mode: 'cors',
        // you need to stringify Javascript Object, so it can be JSON
        body: JSON.stringify(formData),
        // Controls what browsers do with credentials (cookies, HTTP authentication entries, and TLS client certificates)
        // has three values: omit, same-origin(default), include
        // Tells browsers to include credentials in both same- and cross-origin requests,
        // and always use any credentials sent back in responses.
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const status = response.status;

    const responseBody = await response.json();

    if (status >= 400 && status <= 599) {
        throw responseBody;
    }

    return redirect(responseBody.url);
};
