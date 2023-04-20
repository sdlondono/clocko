import { NavigationContainer } from '@react-navigation/native'
import RootStack from './RootStack'
import { AuthProvider } from '../context/AuthProvider'

function RootRoutes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootStack />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default RootRoutes
