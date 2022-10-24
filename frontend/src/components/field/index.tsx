import React from 'react'
import { Input } from './styles'

type Props = {
  state: any
  setState: React.SetStateAction<any>
  type: string
  placeholder?: string
}

const Field: React.FC<Props> = ({ state, setState, type, placeholder }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }

  return (
    <Input
      required
      value={state}
      type={type}
      min={5}
      placeholder={placeholder}
      onChange={e => handleChange(e)}
    />
  )
}

export default Field
