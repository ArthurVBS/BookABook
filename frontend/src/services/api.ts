import axios from 'axios'
import { BASE_URL } from '../utils/env'

export const api = axios.create({
  baseURL: BASE_URL,
})

export const login = async (registration: string) => {
  return api.get(`/user/registration/${registration}`).catch(e => null)
}
