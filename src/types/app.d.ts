import type {
  RouteProp,
  NativeStackNavigationProp
} from '@react-navigation/native'

export type RootStackParamList = {
  Register: undefined
  Login: undefined
  Dashboard: undefined
}

export declare type RouteNamesKeys = keyof RootStackParamList

export declare type ScreenNavigationProp<RouteName extends RouteNamesKeys> =
  NativeStackNavigationProp<RootStackParamList, RouteName>

export declare type ScreenRouteProp<RouteName extends RouteNamesKeys> =
  RouteProp<RootStackParamList, RouteName>
