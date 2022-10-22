import Router from 'next/router'
import { createContext, ReactNode, useContext } from 'react'

import usePersistedState from '../utils/usePersistedState'
import { loginUser } from '../services/api'
import { UserType } from '../types/user'

interface IUserData {
  id: number
  registration: string
  name: string
  password: string
  access: string
}

type authContextType = {
  user: UserType
  login: (registration: string, password: string) => any
  logout: () => void
}

type authContextProps = {
  children: ReactNode
}

const initialValue = {
  user: {},
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
      const userData: IUserData = response?.data

      setUser({
        id: userData.id,
        registration: userData.registration,
        name: userData.name,
        access: userData.access,
      })

      Router.push('/')
    }

    console.log('response', response)
  }

  const logout = () => {
    setUser({})
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
