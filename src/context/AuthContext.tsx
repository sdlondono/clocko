import React from 'react'

export type AuthContextType = {
  user?: User
  updateUser: (user: User) => void
  onAuthLogout: () => void
}

export const initialState: AuthContextType = {
  user: {} as User,
  updateUser: () => undefined,
  onAuthLogout: () => undefined
}

export const AuthContext = React.createContext(initialState)
export const AuthContextProvider = AuthContext.Provider

export function useAuth() {
  const rootData = React.useContext(AuthContext)
  if (!rootData)
    throw new Error('useAuth must be used within a RootContextProvider')

  return rootData
}
