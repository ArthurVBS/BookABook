import React, { useEffect, useState } from 'react'
import { Container } from './styles'

import { initialUser, useAuth } from '../../contexts/auth-context'
import { getBooksByUserId } from '../../services/api'
import { UserType } from '../../types/user'
import { BookType } from '../../types/book'
import Card from './card'

const MyBooksPageContent: React.FC = () => {
  const { user } = useAuth()
  const [userState, setUserState] = useState<UserType>(initialUser)
  const [books, setBooks] = useState<BookType[]>([])

  const getBooks = async (userId: number) => {
    const { data } = (await getBooksByUserId(userId)) as { data: BookType[] }
    setBooks(data)
  }

  const showBooks = () => {
    return books.map(book => {
      return <Card key={book.id} book={book} />
    })
  }

  // Next.js
  useEffect(() => {
    setUserState(user)
    getBooks(user.id)
  }, [])

  return (
    <Container>
      Hello, {userState.name} <br />
      {showBooks()}
    </Container>
  )
}

export default MyBooksPageContent
