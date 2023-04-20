import 'dotenv/config'
export default {
  expo: {
    name: 'clocko',
    slug: 'clocko',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      googleServicesFile: './google-services.json',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.clocko'
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      clientId: process.env.CLIENT_ID
    },
    plugins: [
      '@react-native-firebase/app',
      '@react-native-firebase/perf',
      '@react-native-firebase/crashlytics',
      '@react-native-firebase/auth',
      '@react-native-google-signin/google-signin'
    ]
  }
}
