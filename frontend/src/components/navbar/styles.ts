import styled from 'styled-components'

interface ContainerProps {
  show: boolean
}

export const Container = styled.nav<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  gap: 16px;
  padding: 0px 16px;
  height: 0px;
  visibility: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  transform: translateY(-100%);
  transition: height 0.3s ease, visibility 0.3s ease, transform 0.3s ease,
    padding 0.4s ease-in;

  ${({ show }) =>
    show &&
    `
    height: 100%;
    visibility: visible;
    transform: translateY(0);
    padding: 16px;

  `}

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
