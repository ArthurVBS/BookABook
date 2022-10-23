import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  height: 100%;
  flex-grow: 1;
  margin: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Image = styled.img`
  max-width: 400px;
  width: 100%;
  margin: auto;
`

export const TextContainer = styled.div`
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

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-style: italic;
  }
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
