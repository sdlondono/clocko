import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

type DashboardStackParamList = {
  Home: undefined
  Profile: undefined
}

const Tab = createBottomTabNavigator<DashboardStackParamList>()
const initialRouteName = 'Home'
const DashboardScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        getComponent={() => require('./Home.screen').default}
      />
      <Tab.Screen
        name="Profile"
        getComponent={() => require('./Profile.screen').default}
      />
    </Tab.Navigator>
  )
}

export default DashboardScreen
