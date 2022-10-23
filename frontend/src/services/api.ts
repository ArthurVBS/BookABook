import axios from 'axios'
import { BASE_URL } from '../utils/env'

export const api = axios.create({
  baseURL: BASE_URL,
})

export const loginUser = async (registration: string, password: string) => {
  return await api
    .get(`/user?registration=${registration}&password=${password}`)
    .catch(err => null)
}

export const getBooksByUserId = async (user_id: number) => {
  return await api.get(`/user/books/${user_id}`).catch(err => null)
}
