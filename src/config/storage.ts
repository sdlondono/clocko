import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: 'com.clocko',
  encryptionKey: 'clocko1'
})
