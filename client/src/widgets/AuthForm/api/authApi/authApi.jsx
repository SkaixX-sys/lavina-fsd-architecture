import { $host } from "../../../../shared/api/hostAPI";
import jwt_decode from "jwt-decode"

export const registration = async (login, password) => {
    const {data} = await $host.post('/api/user/registration', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const signIn = async (login, password) => {
    const {data} = await $host.post('api/user/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

