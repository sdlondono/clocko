/// <reference path="./src/types/enviroment.d.ts" />
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins'
import { NativeBaseProvider } from 'native-base'
import { theme } from './src/theme'
import RootRoutes from './src/navigation/RootRoutes'
import config from './src/config/shared.config'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import * as SplashScreen from 'expo-splash-screen'

GoogleSignin.configure({
  webClientId: config.clientId
})
SplashScreen.preventAutoHideAsync()
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold
  })
  if (!fontsLoaded) return null
  return (
    <NativeBaseProvider theme={theme}>
      <RootRoutes />
    </NativeBaseProvider>
  )
}
