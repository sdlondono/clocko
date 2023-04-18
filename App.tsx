import auth from '@react-native-firebase/auth'
import { Box, NativeBaseProvider } from 'native-base'

export default function App() {
  const user = auth().currentUser
  console.log(user)
  return (
    <NativeBaseProvider>
      <Box bg="red.300">Hello world</Box>
    </NativeBaseProvider>
  )
}
