import 'jest-localstorage-mock';
import { login, logout, getToken, isLoggedIn } from './auth';


describe('auth', () => {
    describe('login', () => {
        it('stores the JWT token on login', () => {
            login('testtoken');
            expect(localStorage.setItem).toHaveBeenLastCalledWith('token', 'testtoken');
            expect(localStorage.__STORE__['token']).toBe('testtoken');
        })
    })
    describe('logout', () => {
        it('removes the JWT token on logout', () => {
            login('testtoken');
            logout();
            expect(localStorage.__STORE__).not.toHaveProperty('token');
            expect(localStorage.removeItem).toHaveBeenLastCalledWith('token');
        });  
    })
    describe('getToken', () => {
        it('returns the JWT token stored on login', () => {
            login('testtoken');
            expect(localStorage.__STORE__['token']).toBe('testtoken');
            expect(getToken()).toBe('testtoken');
        })
    })
    describe('isLoggedIn', () => {
        beforeEach(() => {
            localStorage.clear();
        })
        it('returns false if user not logged in', () => {
            expect(isLoggedIn()).toBe(false);
        })
        it('returns true if user logged in and the token is not expired', () => {
            const TOKEN_EXPLIRES_2200:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjcyNTgxMTg0MDAsInN1YiI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.MYtsWbvn7fwXb3Wf0jevv0ykV6_A5WlUdTAJjTiAwZs";
            login(TOKEN_EXPLIRES_2200)
            expect(isLoggedIn()).toBe(true);
        })
        it('returns false if user not logged in and the token is expired', () => {
            const TOKEN_EXPLIRES_2002:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjEwMDk4NDMyMDAsInN1YiI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.Gh76I0z4xl1-9hv6bnqZmNKtmMxox_bySO-mYZX5_yA";
            login(TOKEN_EXPLIRES_2002)
            expect(isLoggedIn()).toBe(false);
        })
    })
})
