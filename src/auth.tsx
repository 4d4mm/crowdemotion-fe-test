
const TOKEN_KEY = 'token';

export const login = (token:string) => {
    localStorage.setItem(TOKEN_KEY, token)
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const isLoggedIn = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
        return false
    }

    const data = token.split('.')[1];
    const decodedData = atob(data);
    const jsonData = JSON.parse(decodedData);
    const expires = jsonData.exp;

    if (expires*1000 < (new Date()).getTime()) {
        return false;
    }

    return true
}
