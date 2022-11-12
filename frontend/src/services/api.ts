import axios from 'axios'
import { BASE_URL } from '../utils/env'

import { AppointmentType } from '../types/appointment'
import { BookType } from '../types/book'
import { AccessType } from '../types/user'

export const api = axios.create({
  baseURL: BASE_URL,
})

export const loginUser = async (registration: string, password: string) => {
  return await api
    .get(`/user?registration=${registration}&password=${password}`)
    .catch(err => null)
}

export const getBooksByUserId = async (user_id: number) => {
  return await api
    .get(`/user/books/${user_id}`)
    .then(res => res.data as BookType[])
    .catch(err => null)
}

export const getAppointmentsByUserId = async (user_id: number) => {
  return await api
    .get(`/appointment/user_id/${user_id}`)
    .then(res => res.data as AppointmentType[])
    .catch(err => null)
}

export const getBookById = async (book_id: number) => {
  return await api
    .get(`/book/${book_id}`)
    .then(res => res.data as BookType)
    .catch(err => null)
}

export const createUser = async (
  registration: string,
  name: string,
  password: string,
  access: AccessType,
) => {
  return await api
    .post(`/user`, { registration, name, password, access })
    .catch(err => null)
}
