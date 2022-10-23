import Router from 'next/router'
import { createContext, ReactNode, useContext } from 'react'

import usePersistedState from '../utils/usePersistedState'
import { loginUser } from '../services/api'
import { UserType } from '../types/user'

type authContextType = {
  user: UserType
  login: (registration: string, password: string) => any
  logout: () => void
}

type authContextProps = {
  children: ReactNode
}

export const initialUser = {
  id: 0,
  registration: '',
  name: '',
  password: '',
  access: 'None',
} as UserType

const initialValue = {
  user: initialUser,
  login: (registration: string, password: string) => {},
  logout: () => {},
}

const AuthContext = createContext<authContextType>(initialValue)

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: authContextProps) => {
  const [user, setUser] = usePersistedState('user', initialValue.user)

  const login = async (registration: string, password: string) => {
    const response = await loginUser(registration, password)

    let isAuthenticated = false
    response?.status === 200 && (isAuthenticated = true)

    if (isAuthenticated) {
      const userData: UserType = response?.data

      setUser({
        id: userData.id,
        registration: userData.registration,
        name: userData.name,
        password: userData.password,
        access: userData.access,
      })

      Router.push('/')
    }
  }

  const logout = () => {
    setUser(initialValue.user)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
