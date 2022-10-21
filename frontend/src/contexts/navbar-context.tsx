import { createContext, ReactNode, useContext, useState } from 'react'

type navbarContextType = {
  show: boolean
  setShow: (newState: boolean) => void
}

type navbarContextProps = {
  children: ReactNode
}

const initialValue = {
  show: false,
  setShow: () => {},
}

const NavbarContext = createContext<navbarContextType>(initialValue)

export const useNavbar = () => useContext(NavbarContext)

export const NavbarContextProvider = ({ children }: navbarContextProps) => {
  const [show, setShow] = useState(initialValue.show)

  return (
    <NavbarContext.Provider value={{ show, setShow }}>
      {children}
    </NavbarContext.Provider>
  )
}
