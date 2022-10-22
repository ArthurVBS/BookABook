import axios from 'axios'
import { BASE_URL } from '../utils/env'

export const api = axios.create({
  baseURL: BASE_URL,
})

export const loginUser = async (registration: string, password: string) => {
  return api
    .get(`/user?registration=${registration}&password=${password}`)
    .catch(err => null)
}
