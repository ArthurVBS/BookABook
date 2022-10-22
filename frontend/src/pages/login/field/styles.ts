import styled from 'styled-components'

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2em;
  caret-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 8px;

  &::placeholder {
    color: gray;
  }
`
