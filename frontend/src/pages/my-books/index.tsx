import React, { useEffect, useState } from 'react'
import { BooksContainer, Container } from './styles'

import Card from './card'
import { initialUser, useAuth } from '../../contexts/auth-context'

import { UserType } from '../../types/user'
import { BookType } from '../../types/book'
import { AppointmentType } from '../../types/appointment'
import { getAppointmentsByUserId, getBooksByUserId } from '../../services/api'

const MyBooksPageContent: React.FC = () => {
  const { user } = useAuth()
  const [userState, setUserState] = useState<UserType>(initialUser)

  const [appointments, setAppointments] = useState<AppointmentType[]>([])
  const [books, setBooks] = useState<BookType[]>([])

  const getAppointments = async () => {
    const appointments = (await getAppointmentsByUserId(
      user.id,
    )) as AppointmentType[]
    setAppointments(appointments)
  }

  const getBooks = async () => {
    const books = (await getBooksByUserId(user.id)) as BookType[]
    setBooks(books)
  }

  const getAppointmentByBook = (book: BookType) => {
    const appointment = appointments.find(
      appointment => appointment.book_id === book.id,
    )
    return appointment
  }

  const showBooks = () => {
    return books.map(book => {
      return (
        <Card
          key={book.id}
          book={book}
          appointment={getAppointmentByBook(book)}
        />
      )
    })
  }

  // Next.js
  useEffect(() => {
    setUserState(user)
    getAppointments()
    getBooks()
  }, [])

  return (
    <Container>
      Hello, {userState.name}
      <BooksContainer>{showBooks()}</BooksContainer>
    </Container>
  )
}

export default MyBooksPageContent
