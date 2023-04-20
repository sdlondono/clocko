import React, { useEffect } from 'react'
import { AuthContextProvider } from './AuthContext'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Box, Spinner } from 'native-base'
import { storage } from '../config/storage'
import * as SplashScreen from 'expo-splash-screen'
interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = React.useState<User | undefined>(undefined)
  useEffect(() => {
    getCurrentUserGoogle()
  }, [])

  const getCurrentUserGoogle = async () => {
    try {
      const googleData = await GoogleSignin.signInSilently()
      if (!googleData || !googleData.idToken) return
      setUserData({
        idToken: googleData.idToken,
        name: googleData.user.name,
        email: googleData.user.email,
        photo: googleData.user.photo
      })
    } catch (error) {
      console.log('Error', error)
    } finally {
      setTimeout(async () => {
        await SplashScreen.hideAsync()
      }, 500)
    }
  }

  const updateUser = (user: User) => {
    storage.set('user', JSON.stringify(user))
    setUserData(user)
  }

  const onAuthLogout = async () => {
    await GoogleSignin.signOut()
    console.log('Into here')
    setUserData(undefined)
  }

  return (
    <AuthContextProvider value={{ user: userData, updateUser, onAuthLogout }}>
      {children}
    </AuthContextProvider>
  )
}
