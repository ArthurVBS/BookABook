import styled from 'styled-components'

export const Container = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  padding: 8px;

  @media (min-width: 768px) {
    padding: 16px;
  }
`

export const LogoTitle = styled.h1`
  font-size: 1.75em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`
