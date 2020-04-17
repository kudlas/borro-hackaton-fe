import {Creds} from "./types";

export enum LoginActionTypes {
    Login = '[Login] login attempt',
    LoginSuccess = '[Login] get login success',
    LoginFail = '[Login] get login failure'
}

export const Login = (creds: Creds) => ({
    type: LoginActionTypes.Login,
    creds
});

export const LoginFail = (err) => ({
    type: LoginActionTypes.LoginFail,
    err
});

export const LoginSuccess = (payload: any) => ({
    type: LoginActionTypes.LoginSuccess,
    payload
});

