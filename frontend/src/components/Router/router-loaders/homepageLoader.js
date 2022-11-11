export async function homepageLoader() {
    const response = await fetch('http://localhost:5500/api/users/data', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const status = response.status;

    const data = await response.json();

    if (status >= 400 && status <= 599) {
        throw data;
    }

    return data;
}
