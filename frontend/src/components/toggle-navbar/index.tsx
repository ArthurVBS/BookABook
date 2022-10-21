import React from 'react'
import { useNavbar } from '../../contexts/navbar-context'
import { Container, Icon } from './styles'

const ToggleNavbar: React.FC = () => {
  const { show, setShow } = useNavbar()

  const icon = show ? 'fas fa-times' : 'fas fa-bars'

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <Container onClick={() => handleClick()}>
      <Icon className={icon}></Icon>
    </Container>
  )
}

export default ToggleNavbar
