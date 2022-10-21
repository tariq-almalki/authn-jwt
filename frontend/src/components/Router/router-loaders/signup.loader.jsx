// Loaders
// first executed on GET requests
// second executed on POST, PUT, DELETE, PATCH requests
// you can use the returned value, using useLoaderData() hook
export const signUpLoader = ({ request }) => {
    localStorage.removeItem('name');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
};
