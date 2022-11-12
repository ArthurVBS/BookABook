import React from 'react'

import { AppointmentType } from '../../../types/appointment'
import { BookType } from '../../../types/book'
import { Container, Details, Subtitle, Title, Year } from './styles'

type Props = {
  book: BookType
  appointment?: AppointmentType
}

const Card: React.FC<Props> = ({ book, appointment }) => {
  return (
    <Container>
      <Title>{book.name}</Title>
      <Subtitle>{book.author}</Subtitle>
      <Details>{book.genre}</Details>
      <Year>{book.year}</Year>
      <p>Starts at: {appointment?.startsAt.toString()}</p>
      <p>Ends at: {appointment?.endsAt.toString()}</p>
    </Container>
  )
}

export default Card
