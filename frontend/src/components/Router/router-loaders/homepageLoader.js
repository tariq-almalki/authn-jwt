export async function homepageLoader() {
    const response = await fetch('http://localhost:5500/api/users/data', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    return data;
}
