import { useMemo } from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/app'
import { useAuth } from '../context/AuthContext'

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootStack() {
  const { user } = useAuth()
  const screenDefaultOptions = useMemo<NativeStackNavigationOptions>(
    () => ({
      screenOrientation: 'portrait',
      headerBackTitleVisible: false,
      headerHideShadow: true,
      headerHideBackButton: true,
      headerShown: false,
      headerLargeTitleHideShadow: true,
      contentStyle: {
        flex: 1
      },
      stackAnimation: 'slide_from_right' // slide animation for androidscree
    }),
    []
  )

  const initialRouteName = user?.idToken ? 'Dashboard' : 'Register'
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenDefaultOptions}
    >
      {user?.idToken ? (
        <Stack.Screen
          name="Dashboard"
          getComponent={() =>
            require('../features/dashboard/screens/Dashboard.screen').default
          }
        />
      ) : (
        <>
          <Stack.Screen
            name="Register"
            getComponent={() =>
              require('../features/auth/screens/Register.screen').default
            }
          />
          <Stack.Screen
            name="Login"
            getComponent={() =>
              require('../features/auth/screens/Login.screen').default
            }
          />
        </>
      )}
    </Stack.Navigator>
  )
}

RootStack.displayName = 'RootStack'

export default RootStack
