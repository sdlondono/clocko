import { useEffect, useState } from 'react'
import ProfileComponent from '../components/Profile.component'
import ProfileHeaderComponent from '../components/ProfileHeader.component'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useAuth } from '../../../context/AuthContext'

const ProfileContainer = () => {
  const { user, onAuthLogout } = useAuth()
  if (!user) return null
  const onAdd = () => {
    console.log('add')
  }
  return (
    <>
      <ProfileHeaderComponent
        userName={user.email}
        onAdd={onAdd}
        onLogout={onAuthLogout}
      />
    </>
  )
}

export default ProfileContainer
