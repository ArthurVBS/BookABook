import styled from 'styled-components'

export const Container = styled.form`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  margin: 16px auto;
  padding: 16px;

  @media (min-width: 768px) {
    font-size: 1.25em;
  }
`

export const Title = styled.h1`
  width: 100%;
  letter-spacing: 2px;
  padding: 8px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 100%;
  font-size: 1em;
  margin-top: 8px;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
`
