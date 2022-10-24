import React from 'react'
import { AccessType } from '../../types/user'
import { Container, Input, InputBox, Label } from './styles'

type Props = {
  options: AccessType[]
  state: any
  setState: React.SetStateAction<any>
}

const Radio: React.FC<Props> = ({ options, state, setState }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }

  const showOptions = () => {
    return options.map((option, index) => {
      return (
        <InputBox key={index}>
          <Input
            type="radio"
            id={option}
            name="radio"
            checked={option === state}
            value={option}
            onChange={e => handleChange(e)}
          />
          <Label htmlFor={option}>{option}</Label>
        </InputBox>
      )
    })
  }

  return <Container>{showOptions()}</Container>
}

export default Radio
