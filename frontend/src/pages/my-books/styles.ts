import styled from 'styled-components'

export const Container = styled.main``

export const BooksContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
`
