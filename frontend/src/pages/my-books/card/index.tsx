import React from 'react'
import { BookType } from '../../../types/book'

type Props = {
  book: BookType
}

const Card: React.FC<Props> = ({ book }) => {
  return (
    <div>
      <hr />
      <h3>{book.name}</h3>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.year}</p>
    </div>
  )
}

export default Card
