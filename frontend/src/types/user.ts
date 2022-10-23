export type UserType = {
  id: number
  registration: string
  name: string
  password: string
  access: AccessType
}

export type AccessType = 'Librarian' | 'Student' | 'None'
