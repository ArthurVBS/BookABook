import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 8px;
  width: 100%;
`

export const InputBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  input:checked + label {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Input = styled.input`
  display: none;
`

export const Label = styled.label`
  cursor: pointer;
  width: 100%;
  letter-spacing: 2px;
  padding: 8px;

  transition: background-color 0.4s ease, color 0.4s ease;
`
