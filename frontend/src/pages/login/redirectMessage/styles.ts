import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding: 16px;
`

export const Title = styled.h1`
  text-align: center;
`

export const Subtitle = styled.h3`
  text-align: center;
  font-weight: 400;
  width: 100%;
  max-width: 360px;
`

export const Button = styled.button`
  padding: 8px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 100%;
  max-width: 360px;
  font-size: 1.2em;
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
