import styled from 'styled-components'

export const Container = styled.main`
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
