import { redirect } from 'react-router-dom';

export async function homepageAction() {
    const response = await fetch('http://localhost:5500/api/sign-out', {
        method: 'POST',
        mode: 'cors',
        // you need to stringify Javascript Object, so it can be JSON
        body: JSON.stringify({}),
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
}
