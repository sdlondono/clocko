import React from 'react'
import RegisterComponent from '../components/Register.component'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useAuth } from '../../../context/AuthContext'
import { useNavigation } from '@react-navigation/native'
import type { ScreenNavigationProp } from '../../../types/app'

const RegisterContainer = () => {
  const { updateUser } = useAuth()
  const navigation = useNavigation<ScreenNavigationProp<'Register'>>()
  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      const userInfo = await GoogleSignin.signIn()
      if (!userInfo || !userInfo.idToken) return
      updateUser({
        idToken: userInfo.idToken,
        name: userInfo.user.name,
        email: userInfo.user.email,
        photo: userInfo.user.photo
      })
      navigation.navigate('Dashboard')
    } catch (error) {
      console.log(error)
    }
  }
  return <RegisterComponent onGoogle={signInGoogle} />
}

export default RegisterContainer
