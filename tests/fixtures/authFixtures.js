export const initialState = {
    status: "checking",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authenticatedState = {
    status: "authenticated",
    uid: 'ABCD',
    email: 'mail@mail.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: "not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: 'LOPI',
    email: 'demo@mail.com',
    displayName: 'Demo User',
    photoURL: 'https://foto.jpg',
}